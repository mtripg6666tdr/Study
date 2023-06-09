import React from "react";
import { RouteComponentProps } from "react-router";

export class Archives extends React.Component<RouteComponentProps<{article:string}>> {
  render(){
    return (
      <h1>Archives ({this.props.match.params.article})</h1>
    );
  }
}