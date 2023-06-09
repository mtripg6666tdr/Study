import React from "react";

type Props = {year:number};
export class Footer extends React.Component<Props> {
  constructor(props:Props){
    super(props);
    console.log(props);
  }
  render(){
    return (
      <footer>
        <p>Copyright (c) {(this.props as any).year} mtripg6666tdr All Rights Reserved.</p>
      </footer>
    )
  }
}