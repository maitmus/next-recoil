import { atom, selector } from "recoil";

let id = 0;

export function getId() {
  return id++;
}
interface ITodoListItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<ITodoListItem[]>({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom<string>({
  key: "TodoListFilter",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
