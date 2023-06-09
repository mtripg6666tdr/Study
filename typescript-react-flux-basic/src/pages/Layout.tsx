import React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import { Footer } from "../components/layout/Footer";
import { Nav } from "../components/layout/Nav";

type Props = RouteComponentProps & {
  
};
class _Layout extends React.Component<Props> {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <Nav location={location} />
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              {this.props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export const Layout = withRouter(_Layout)