import { EventEmitter } from "events";
import { todoEntry } from "../definition";

class _toDoStore extends EventEmitter {
  private todos = null as todoEntry[];

  constructor(){
    super();
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Bills",
        complete: false
      }
    ]
  }

  createToDo(entry:string){
    const id = Date.now();
    this.todos.push({
      complete: false,
      text: entry,
      id
    });
    this.emit("change");
  }

  getAll(){
    return this.todos;
  }
}

export const todoStore = new _toDoStore();
//@ts-ignore
window.todoStore = todoStore;