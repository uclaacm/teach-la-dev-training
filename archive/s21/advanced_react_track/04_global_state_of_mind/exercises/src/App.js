import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContextPage from "./pages/ContextPage";
import PropDrillingPage from "./pages/PropDrillingPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-container">
          <nav>
            <div>
              <Link to="/drilling">
                <button className="button-container">Prop Drilling</button>
              </Link>

              <Link to="/context">
                <button className="button-container">useContext</button>
              </Link>
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              Click a page on the top to get started!
            </Route>

            <Route path="/drilling">
              <div className="subcomponent-container">
                <PropDrillingPage />
              </div>
            </Route>
            <Route path="/context">
              <div className="subcomponent-container">
                <ContextPage />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
