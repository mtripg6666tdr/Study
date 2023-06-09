import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./component/footer";
import { LoopText } from "./component/loop";
import { UserNameInput } from "./component/UserNameInput";

type LayoutState = {msg:number, name:string};
class Layout extends React.Component<{}, LayoutState> {
  constructor(props:{}){
    super(props);
    this.state = {
      msg: 1,
      name: ""
    };
  }

  private onNameChanged(name:string){
    this.setState(name == "" ? {...this.state, name: "This is a test file :)"} : {...this.state, name});
  }

  render(){
    const loops = [...Array(100)].map((_, n) => <LoopText key={"l_key" + n} />);
    const msg = ["Hello world on React!", this.state.name];
    // setTimeout(()=>{
    //   this.setState({msg: (this.state as LayoutState).msg == 0 ? 1 : 0});
    // }, 2000);
    return (
      <div>
        <h1>{msg[(this.state as LayoutState).msg]}</h1>
        <p><UserNameInput onInputChangeHandler={(v) => this.onNameChanged(v)} /></p>
        <div>
          {loops}
        </div>
        <Footer year={2019} />
      </div>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);