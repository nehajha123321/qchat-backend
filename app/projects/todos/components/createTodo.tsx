"use client";

import { useState } from "react";
//import { Form } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function CreateToDo() {
  const [title, setTitle] = useState<string>();

  const queryClient = useQueryClient();

  const { mutate: handleCreateTodo } = useMutation({
    mutationFn: (todo: any) => Promise.resolve(client.models.Todo.create(todo)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setTitle("");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newToDo = { content: title, done: false, priority: "medium" };
    console.log(newToDo);
    handleCreateTodo(newToDo);
  };

  return (
    <div className="border-b-2 border-stone-200">
      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex justify-between space-x-1 items-center flex-wrap p-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Create Todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered flex-grow mr-4"
        />
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateToDo;
