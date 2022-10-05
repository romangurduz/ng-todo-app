export class Todo {
  id: number = 0;
  title: string = '';
  description: string = '';
  completed: boolean = false;

  constructor(
    id: number,
    title: string,
    description: string,
    completed: boolean
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}
