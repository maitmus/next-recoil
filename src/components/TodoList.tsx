"use client";

import { filteredTodoListState, todoListState } from "@/store/TodoListStore";
import { useRecoilState, useRecoilValue } from "recoil";

export default function TodoList() {
  const [_, setTodoList] = useRecoilState(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  const handleButtonOnClick = (indexToRemove: number) => {
    setTodoList((old) => old.filter((element) => element.id !== indexToRemove));
  };

  const handleCheckboxOnClick = (index: number) => {
    setTodoList((old) =>
      old.map((element) =>
        element.id === index
          ? { ...element, isComplete: !element.isComplete }
          : element
      )
    );
  };

  return (
    <>
      {todoList.length != 0 ? (
        <ul>
          {todoList.map((element) => (
            <div className="flex items-center space-x-2" key={element.id}>
              <li className="list-none">{element.text}</li>
              <input
                type="checkbox"
                checked={element.isComplete}
                key={element.id}
                onClick={() => handleCheckboxOnClick(element.id)}
              />
              <button onClick={() => handleButtonOnClick(element.id)}>
                제거
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <p>Nothing Here!</p>
      )}
    </>
  );
}
