"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ToDoItem from "./TodoItem";
import CreateToDo from "./components/createTodo";
import Skeleton from "../../ui/Skeleton";

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

/* type NewTodo = {
  content: string;
  done: boolean;
  priority: string;
}; */

export default function TodoList() {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery<Schema["Todo"][]>({
    queryKey: ["todos"],
    queryFn: () => client.models.Todo.list().then((list) => list.data),
  });

  const { mutate: createTodo } = useMutation({
    mutationFn: (todo: any) => Promise.resolve(client.models.Todo.create(todo)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      <CreateToDo />
      <ul>
        {isFetching ? (
          <Skeleton />
        ) : (
          data?.map((todo) => <ToDoItem todo={todo} key={todo.id} />)
        )}
      </ul>
    </div>
  );
}
