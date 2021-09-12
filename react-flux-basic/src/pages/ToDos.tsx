import React from "react";

import { Todo } from "../components/Todo";

type State = {
  todos:{
    id:number,
    text:string,
    complete:boolean
  }[]
}
export class Todos extends React.Component<{}, State> {
  constructor(props:{}) {
    super(props);
    this.state = {
      todos: [
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
    };
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