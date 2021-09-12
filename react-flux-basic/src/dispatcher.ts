import { Dispatcher } from "flux";

export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export type DispatcherAction = {
  type: string,
  data: any;
}
export const dispatcher = new Dispatcher<DispatcherAction>();