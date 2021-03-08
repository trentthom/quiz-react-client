import React, { Component } from "react"
import Header from './Header'
import Game from './Game'
import axios from 'axios'
import data from './dummydata'

class App extends React.Component{
  constructor(){
    super()
  }

  // const answers = data.map(data => {
  //   return (
  //     <Game question={data.question} ans1={data.ans1} ans2={data.ans2} ans3={data.ans3} ans4={data.ans4}/>
  //   )
  // })

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
