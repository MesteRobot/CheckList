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
  clear(): void {
    this.list.splice(0, this.list.length);
  }
  public set list(list: ListItem[]) {
    this.list = list;
  }
  load(): void {
      
  }
  save(): void {
      
  }
  add(item: ListItem): void {
    this.list.push(item);
  }
}

