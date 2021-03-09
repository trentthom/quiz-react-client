import React, { Component } from "react"
import Header from './Header'
import Game from './Game'
import Home from './Home'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component{

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

// < Route path="game/:topicId" component={Game} />
