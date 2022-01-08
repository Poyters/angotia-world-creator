import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/styles/index.scss";
import { Home } from "./components/views/Home";
import { MapCreator } from "./components/views/MapCreator";
import { CharCreator } from "./components/views/CharCreator";
import { Help } from "./components/views/Help";
import { License } from "./components/views/License";
import { Features } from "./components/views/Features";
import { NotFound } from "./components/views/NotFound";
import { MapCreationRules } from "./components/views/MapCreationRules";
import { Notifications } from "./components/partials/Notifications";
import { LoadRequestedMap } from "./components/views/LoadRequestedMap";
import { LoadRequestedChar } from "./components/views/LoadRequestedChar";
import routesConfig from "./assets/configs/routes.config.json";

export const App = () => {
  return (
    <>
      <Notifications />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={`/${routesConfig.mapCreator}`} component={MapCreator} />
          <Route
            path={`/${routesConfig.charCreator}`}
            component={CharCreator}
          />
          <Route path={`/${routesConfig.help}`} component={Help} />
          <Route path={`/${routesConfig.license}`} component={License} />
          <Route path={`/${routesConfig.features}`} component={Features} />
          <Route
            path={`/${routesConfig.mapCreationRules}`}
            component={MapCreationRules}
          />
          <Route
            path={`/${routesConfig.loadReqMap}`}
            component={LoadRequestedMap}
          />
          <Route
            path={`/${routesConfig.loadReqChar}`}
            component={LoadRequestedChar}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};
