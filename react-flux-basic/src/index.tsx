import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Favorites } from "./pages/Favorites";
import { Todos } from "./pages/Todos";
import { Layout } from "./pages/Layout";
import { Settings } from "./pages/Settings";
import { AppURL } from "./definition";

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path={AppURL.Top} component={Todos} />
      <Route path={AppURL.Favorites} component={Favorites} />
      <Route path={AppURL.Settings} component={Settings} />
    </Layout>
  </Router>
  ,app);