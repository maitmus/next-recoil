"use client";

import { todoListStore } from "@/store/TodoListStore";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";

export default function TodoListComponent() {
  const [_todoList, setTodoList] = useRecoilState(todoListStore);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="mt-4">
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        placeholder="Type something..."
        className="text-black"
      ></input>
      <button
        className="ml-3"
        onClick={() => {
          setTodoList((old) => [...old, inputValue]);
          setInputValue("");
        }}
      >
        추가
      </button>
    </div>
  );
}
