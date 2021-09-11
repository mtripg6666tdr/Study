import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "./pages/layout";
import { Featured, Archives, Settings } from "./pages";
import { AppURL } from "./constant";

const app = document.getElementById('app');
ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path={AppURL.Featured} component={Featured} />
      <Route exact path={AppURL.Archives} component={Archives} />
      <Route path={AppURL.Archives + "/:article"} component={Archives} />
      <Route path={AppURL.Settings} component={Settings} />
    </Layout>
  </Router>
  , app);