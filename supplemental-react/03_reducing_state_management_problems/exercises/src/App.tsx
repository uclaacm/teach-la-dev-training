import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReducerPage from "./pages/ReducerPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-container">
          <nav>
            <div>
              <Link to="/reducer">
                <button className="button-container">useReducer</button>
              </Link>
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              Click a page on the top to get started!
            </Route>

            <Route path="/reducer">
              <div className="subcomponent-container">
                <ReducerPage />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
