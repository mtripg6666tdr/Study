import React from "react";

import { Todo } from "../components/Todo";
import { todoEntry } from "../definition";
import { todoStore } from "../stores/ToDoStore";

import * as ToDoActions from "../actions/ToDoActions";

type State = {
  todos:todoEntry[]
}
export class Todos extends React.Component<{}, State> {
  private onToDoChange = null as any;

  constructor(props:{}) {
    super(props);
    this.state = {
      todos: todoStore.getAll()
    };
    this.onToDoChange = this._onToDoChange.bind(this);
  }

  private _onToDoChange(){
      this.setState({
        todos: todoStore.getAll()
      });
  }

  componentDidMount(){
    todoStore.on("change", this.onToDoChange);
    console.log("count", todoStore.listenerCount("change"));
  }

  componentWillUnmount(){
    todoStore.removeListener("change", this.onToDoChange);
  }

  createToDo(){
    ToDoActions.createToDo("New ToDo");
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <p>
          <button type="button" onClick={this.createToDo.bind(this)}>Create ToDo!</button>
        </p>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}