import React from "react";

import { Todo } from "../components/Todo";
import { todoEntry } from "../definition";
import { todoStore } from "../stores/ToDoStore";

type State = {
  todos:todoEntry[]
}
export class Todos extends React.Component<{}, State> {
  constructor(props:{}) {
    super(props);
    this.state = {
      todos: todoStore.getAll()
    };
  }

  componentDidMount(){
    todoStore.on("change", () => {
      this.setState({
        todos: todoStore.getAll()
      });
    });
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}