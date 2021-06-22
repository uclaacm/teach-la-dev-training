import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MappingPage from "./pages/MappingPage";
import MappingSolution from "./solutions/MappingSolution";
import FilteringPage from "./pages/FilteringPage";
import FilteringSolution from "./solutions/FilteringSolution";
import ReducingPage from "./pages/ReducingPage";
import ReducingSolution from "./solutions/ReducingSolution";
import SortingPage from "./pages/SortingPage";
import SortingSolution from "./solutions/SortingSolution";
import EverythingPage from "./pages/EverythingPage";
import EverythingSolution from "./solutions/EverythingSolution";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-container">
          <nav>
            <div>
              <Link to="/everything">
                <button className="button-container">All At Once!</button>
              </Link>

              <Link to="/mapping">
                <button className="button-container">Mapping Exercise</button>
              </Link>

              <Link to="/filtering">
                <button className="button-container">Filtering Exercise</button>
              </Link>

              <Link to="/reducing">
                <button className="button-container">Reducing Exercise</button>
              </Link>

              <Link to="/sorting">
                <button className="button-container">Sorting Exercise</button>
              </Link>
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              Click a page on the top to get started!
            </Route>

            <Route path="/everything">
              <div className="subcomponent-container">
                <EverythingSolution />
              </div>
            </Route>

            <Route path="/mapping">
              <div className="subcomponent-container">
                <MappingPage />
              </div>
            </Route>

            <Route path="/filtering">
              <div className="subcomponent-container">
                <FilteringPage />
              </div>
            </Route>

            <Route path="/reducing">
              <div className="subcomponent-container">
                <ReducingPage />
              </div>
            </Route>

            <Route path="/sorting">
              <div className="subcomponent-container">
                <SortingPage />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
