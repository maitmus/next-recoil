"use client";

import { todoListFilterState } from "@/store/TodoListStore";
import { useRecoilState } from "recoil";

export default function TodoListFilter() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setFilter(value);
  };
  return (
    <>
      <select
        className="text-black mt-3"
        value={filter}
        onChange={updateFilter}
      >
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
