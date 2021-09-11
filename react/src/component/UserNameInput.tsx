import React from "react";

type Props = {onInputChangeHandler:(name:string)=>void};
export class UserNameInput extends React.Component<Props> {
  private emitOnInputChange(e:React.ChangeEvent<HTMLInputElement>){
    const text = e.target.value;
    this.props.onInputChangeHandler(text);
  }
  constructor(props:Props){
    super(props);
  }
  render(){
    return (
      <input onChange={this.emitOnInputChange.bind(this)} />
    )
  }
}