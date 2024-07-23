"use client";

import { getId, todoListState } from "@/store/TodoListStore";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRecoilState } from "recoil";

export default function TodoListComponent() {
  const [_todoList, setTodoList] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) return;
    setTodoList((old) => [
      ...old,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        placeholder="Type something..."
        className="text-black"
        required
      ></input>
      <button className="ml-3">추가</button>
    </form>
  );
}
