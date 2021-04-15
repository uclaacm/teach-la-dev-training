import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LecturePages from "./pages/lecture/LecturePages";
import UseEffectPage from "./pages/UseEffectPage";
import UseStatePage from "./pages/UseStatePage";
import FunctionalLectureSolution from "./solutions/FunctionalLectureSolution";
import UseStateSolution from "./solutions/UseStateSolution";
import UseEffectSolution from "./solutions/UseEffectSolution";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-container">
          <nav>
            <div>
              <Link to="/lecture">
                <button className="button-container">
                  Class Vs. Hooked Components
                </button>
              </Link>

              <Link to="/useState">
                <button className="button-container">useState Exercise</button>
              </Link>

              <Link to="/useEffect">
                <button className="button-container">useEffect Exercise</button>
              </Link>

              <Link to="/">
                <button className="button-container">
                  Unmount Current Page
                </button>
              </Link>
            </div>
          </nav>

          <Switch>
            <Route exact={true} path="/">
              Click a page on the top to get started!
            </Route>

            <Route path="/lecture">
              <LecturePages />
            </Route>

            <Route path="/useState">
              <div className="subcomponent-container">
                <UseStatePage />
                {/* <UseStateSolution/>  */}
              </div>
            </Route>

            <Route path="/useEffect">
              <div className="subcomponent-container">
                <UseEffectPage />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
