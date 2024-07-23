import { atom } from "recoil";

export const todoListStore = atom<string[]>({ key: "todoList", default: [] });
