import React from "react";

type Props = {
  complete:boolean,
  edit?:boolean,
  text:string
}
export class Todo extends React.Component<Props> {
  constructor(props:Props) {
    super(props);
  }
  render() {
    const { complete, edit, text } = this.props;
    const icon = complete ? "\u2714" : "\u2716";

    if (edit) {
      return (
        <li>
          <input value={text} autoFocus />
        </li>
      );
    }

    return (
      <li>
        <span>{text}</span>
        <span>{icon}</span>
      </li>
    );
  }
}