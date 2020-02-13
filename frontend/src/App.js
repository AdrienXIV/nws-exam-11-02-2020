import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import {Articles} from "./components/Articles";
import {Article} from "./components/Article";
import {Edit} from "./components/Edit";
import {Add} from './components/Add';
import {Home} from "./components/Home";
import { Register } from "./components/Register";

class App extends Component {
   
  render() {
    return (

          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/new" component={Register} />
            <Route exact path="/blog" component={Articles} />
            <Route exact path="/blog/new" component={Add} />
            <Route exact path="/blog/:id" component={Article}/>
            <Route exact path="/blog/:id/edit" component={Edit}/>
            <Route exact path="/user/login" component={Login} />
          </Switch>
    );
  }
}
export default App;