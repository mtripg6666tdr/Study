import React from "react";
import { Link } from "react-router-dom";
import { ButtonSplitter } from "../component/buttonSplitter";
import { AppURL } from "../constant";

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to={AppURL.Featured}>
          <button className="btn btn-danger">Featured</button>
        </Link>
        <ButtonSplitter />
        <Link to={AppURL.Archives}>
          <button className="btn btn-danger">archives</button>
        </Link>
        <ButtonSplitter />
        <Link to={AppURL.Archives + "/some-other-articles"}>
          <button className="btn btn-warning">archives (some other articles)</button>
        </Link>
        <ButtonSplitter />
        <Link to={AppURL.Settings}>
          <button className="btn btn-success">settings</button>
        </Link>
      </div>
    );
  }
}