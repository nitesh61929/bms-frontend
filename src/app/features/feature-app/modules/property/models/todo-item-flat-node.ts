/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  name: string;
  level: number;
  expandable: boolean;
  isDropdown: boolean;
  order: number;
  multiple: boolean;
}
