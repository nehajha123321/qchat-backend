"use client";

import { Schema } from "@/amplify/data/resource";
import { useQueryClient, useMutation } from "@tanstack/react-query";
//import { deleteToDo, updateToDo } from "../services/apiToDos";
import { generateClient } from "aws-amplify/data";

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

function ToDoItem({ todo }: { todo: any }) {
  const queryClient = useQueryClient();

  const { id, content: title, done: completed } = todo;

  const { data: updatedData, mutate: handleCompleteTodo } = useMutation({
    mutationFn: (todo: Schema["Todo"]) =>
      Promise.resolve(client.models.Todo.update(todo)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { data: deletedData, mutate: handleDeleteTodo } = useMutation({
    mutationFn: (id: string) =>
      Promise.resolve(client.models.Todo.delete({ id })),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div
      className="card w-full bg-base-900 shadow-xl my-2 border-stone-300 border-2 bg-slate-200"
      key={id}
    >
      <div className="card-body">
        <span className="flex space-x-4 justify-between">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() =>
              handleCompleteTodo({
                ...todo,
                done: !completed,
              })
            }
            className="checkbox"
          />
          <h3
            className={`card-content w-full ${completed ? "line-through" : ""}`}
          >
            {title}
          </h3>
          <span onClick={() => handleDeleteTodo(id)} className="cursor-pointer">
            ❌
          </span>
        </span>
      </div>
    </div>
  );
}

export default ToDoItem;
