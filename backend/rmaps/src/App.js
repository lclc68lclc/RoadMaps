import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import TestModal from "./components/testmodal";
import ResultsModal from "./components/resultsmodal";

class App extends Component {

  /*goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }*/

  render() {
    return (
      
      <Router>
        <div className="App">
        <Switch>
        <Route exact path = "/" component = {Home} />;
        <Route exact path = "/TestModal" component = {TestModal} />;
        <Route exact path = "/ResultsModal" component = {ResultsModal} />;
        </Switch>
        </div>
      </Router>

    );
  }
}

export default App;