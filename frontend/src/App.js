import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import {Articles} from "./components/Articles";

class App extends Component {
   
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route exact path="/blog" component={Articles} />
            <Route exact path="/user/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;