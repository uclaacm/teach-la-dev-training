import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import RandomNum from "./pages/RandomNum";
import PureIdentifier from "./pages/PureIdentifier";
import Identifier from "./pages/Identifier";
import DescribePage from "./pages/DescribePage";

import "./App.css";

//fourth page

function App() {
  const [firstNum, setFirstNum] = useState(5);
  const [secondNum, setSecondNum] = useState(15);
  useEffect(() => {
    function chooseNum10() {
      return Math.floor(Math.random() * 10) + 1;
    }
    function chooseNum20() {
      return chooseNum10() + 10;
    }
    setInterval(() => {
      setFirstNum(chooseNum10());
      setSecondNum(chooseNum20());
    }, 1000);
  }, []);

  interface IdentifierParams {
    currentSection: string;
  }

  interface IdentifierMatchProps
    extends RouteComponentProps<IdentifierParams> {}

  return (
    <Router>
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

              <Link to={`/random/${firstNum}/${secondNum}`}>
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
