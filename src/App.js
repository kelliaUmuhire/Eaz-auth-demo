import React, { Component } from "react";
import "./App.css";
import Wizard from "./components/Auth/Wizard/Wizard";
import WhoAreYou from "./components/Auth/WhoAreYou";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <WhoAreYou />
            </Route>
            <Route path="/wizard" exact component={Wizard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
