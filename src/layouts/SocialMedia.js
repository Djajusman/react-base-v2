import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Home from "views/home/Home";

export default function Auth() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
          <Switch>
            <Route path="/social-media/home" exact component={Home} />
            <Redirect from="/social-media" to="/social-media/home" />
          </Switch>
          <FooterSmall absolute />
      </main>
    </>
  );
}
