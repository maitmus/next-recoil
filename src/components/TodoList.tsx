"use client";

import { todoListStore } from "@/store/TodoListStore";
import { useRecoilState } from "recoil";

export default function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListStore);

  const handleOnClick = (indexToRemove: number) => {
    setTodoList((old) =>
      old.filter((_element, index) => index !== indexToRemove)
    );
  };

  return (
    <>
      {todoList.length != 0 ? (
        <ul>
          {todoList.map((element, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <li className="list-none">{element}</li>
              <button onClick={() => handleOnClick(index)}>제거</button>
            </div>
          ))}
        </ul>
      ) : (
        <p>Nothing Here!</p>
      )}
    </>
  );
}
