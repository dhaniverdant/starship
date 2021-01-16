import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StarshipList from "./components/starshipList"
import StarshipDetail from "./components/starshipDetail"

const NotFoundRoute = () => <div>404 Page</div>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={StarshipList} />
        <Route
          exact
          path="/starship/:index"
          component={StarshipDetail}
        />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>
  );
};

export default App;
