import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Layouts/WebStructure/Dashboard/Dashboard";
import Billboard from "./components/Layouts/WebStructure/VisualElements/Billboard";
import GameDetails from "./components/Layouts/Games/GameDetails";

const App = () => {
  return (
    <div>
      <Billboard />
      <Switch>
        <Route path="/:id" exact component={GameDetails} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
