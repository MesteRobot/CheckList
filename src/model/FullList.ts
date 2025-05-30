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
  load(): void {
      
  }
  save(): void {
      
  }
  clear(): void {
    this.list.splice(0, this.list.length);
  }
  add(item: ListItem): void {
    this.list.push(item);
  }
  remove(id: string): void {
    const index = this.list.findIndex((item) => item.id === id);
    this.list.splice(index, 1);
  }
  setChecked(id: string): void {
    const index = this.list.findIndex((item) => item.id === id);
    !this.list[index].checked;
  }
}

