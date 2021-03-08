import React, { Component } from "react"
import data from './dummydata'
import axios from 'axios'

//onst SERVER_URL = //fill this out

class Game extends React.Component {
  constructor(props) {
    super()
  }


  render() {
    return(
      <div>
        <div className='question'><h1>Question</h1></div>

        <div style={{backgroundColor: 'red'}}className="container">
          <div style={{lineHeight: '100px', backgroundColor: 'blue'}}>multi choise answer</div>
          <div style={{lineHeight: '100px'}}>multi choise answer</div>
          <div style={{lineHeight: '100px'}}>multi choise answer</div>
          <div style={{lineHeight: '100px'}}>multi choise answer</div>
        </div>
      </div>
    )
  }
}

export default Game
