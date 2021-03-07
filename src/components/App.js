import React, { Component } from "react"
import Header from './Header'
import Game from './Game'
import axios from 'axios'

class App extends React.Component{
  constructor(){
    super()
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
      </div>
    );
  }
}
export default App;
