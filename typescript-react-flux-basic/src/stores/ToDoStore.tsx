import { EventEmitter } from "events";
import { todoEntry } from "../definition";
import { CREATE_TODO, dispatcher, DispatcherAction } from "../dispatcher";

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

  handleActions(action:DispatcherAction){
    switch(action.type){
      case CREATE_TODO: {
        this.createToDo(action.data as string);
      } break;
    }
  }
}

export const todoStore = new _toDoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
//@ts-ignore
window.dispatcher = dispatcher;