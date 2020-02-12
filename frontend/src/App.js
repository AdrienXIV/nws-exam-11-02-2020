import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import {Articles} from "./components/Articles";
import {Article} from "./components/Article";
import {Edit} from "./components/Edit";

class App extends Component {
   
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route exact path="/blog" component={Articles} />
            <Route exact path="/blog/:id" component={Article}/>
            <Route exact path="/blog/:id/edit" component={Edit}/>
            <Route exact path="/user/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;