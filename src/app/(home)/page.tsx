import TodoList from "@/components/TodoList";
import TodoListComponent from "@/components/TodoListComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOME",
};

export default function Home() {
  return (
    <>
      <TodoList />
      <TodoListComponent />
    </>
  );
}
