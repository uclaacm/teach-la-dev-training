import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import RandomNum from "./pages/RandomNum";
import Identifier from "./pages/Identifier";

import "./App.css";

function App() {
  function chooseNum10() {
    return Math.floor(Math.random() * 10) + 1;
  }
  function chooseNum20() {
    return chooseNum10() + 10;
  }

  return (
    <Router
      forceRefresh={true} // must be true if you want to generate random num each time!
    >
      <div className="App">
        <div className="content-container">
          <nav className="navbar">
            <div>
              <Link to="/">
                <button className="button-container">Base Page</button>
              </Link>
              <Link to="/first">
                <button className="button-container">First Page</button>
              </Link>

              <Link to="/second">
                <button className="button-container">Second Page</button>
              </Link>

              <Link to={`/random/${chooseNum10()}/${chooseNum20()}`}>
                <button className="button-container">Random Num</button>
              </Link>
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              Click a page on the top to get started!
            </Route>
            <Route path="/first">
              <div className="subcomponent-container">
                <FirstPage />
              </div>
            </Route>
            <Route path="/second">
              <div className="subcomponent-container">
                <SecondPage />
              </div>
            </Route>
            <Route path="/random/:first/:second">
              <div className="subcomponent-container">
                <RandomNum />
              </div>
            </Route>
          </Switch>

          <Switch>
            <Route path="/:currentSection">
              <Identifier />
            </Route>

            {/* The path goes to the star if the URL is empty in this case! 
            (whenever the there are no route matches for the switch like Error 404) */}
            <Route path="*">
              <div className="odd-component">The URL is empty!</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
