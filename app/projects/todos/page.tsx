"use client";

import TodoList from "./TodoList";
import dataGemmy from "./gemmy-intents.json"

/* const data2:any = dataGemmy.data;

console.log(data2)
const newData = data2.filter((item:any) => item.responses && item.responses[0]).
map((item:any) => {
  return (item.name + "~~" + item.responses[0])
})

console.log(newData) */

/* import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; */
//import { Suspense } from "react";

/* const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
}); */

function Page() {
  return (
    <main>
      {/* <QueryClientProvider client={queryClient}> */}
        <TodoList />
     {/*  </QueryClientProvider> */}
    </main>
  );
}
export default Page;
