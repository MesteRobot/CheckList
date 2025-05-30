/** @format */

import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clear(): void;
  add(item: ListItem): void;
  remove(id: string): void;
  setChecked(id: string): void;
}

export default class FullList implements List {
  constructor() {}
  public get list(): ListItem[] {
    return this.list;
  }
  public set list(list: ListItem[]) {
    this.list = list;
  }
  add(item: ListItem): void {
    this.list.push(item);
  }
}

