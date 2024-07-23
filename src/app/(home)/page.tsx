import TodoList from "@/components/TodoList";
import TodoListComponent from "@/components/TodoListComponent";
import TodoListFilter from "@/components/TodoListFilter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOME",
};

export default function Home() {
  return (
    <>
      <TodoList />
      <TodoListComponent />
      <TodoListFilter />
    </>
  );
}
