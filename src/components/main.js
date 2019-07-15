//External dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

//Internal dependencies
import Pages from "../pages";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route path="/roster" component={Pages.Roster} />
      <Route path="/schedule" component={Pages.Schedule} />
      <Route path="/api/endpoints" component={Pages.Api.Endpoints} />
    </Switch>
  </main>
);

export default Main;
