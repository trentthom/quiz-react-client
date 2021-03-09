import React, { Component } from "react"
import Header from './Header'
import Game from './Game'
import Home from './Home'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component{
  constructor(){
    super()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/Game/:topicId' component={Game} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

//re do route with params //

// path="game/:topicId"
