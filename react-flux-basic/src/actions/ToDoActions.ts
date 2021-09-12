import { CREATE_TODO, DELETE_TODO, dispatcher } from "../dispatcher";

export function createToDo(text:string){
  dispatcher.dispatch({
    type: CREATE_TODO,
    data: text
  });
}

export function deleteToDo(id:number){
  dispatcher.dispatch({
    type: DELETE_TODO,
    data: id
  });
}