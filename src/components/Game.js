import React, { Component } from "react"
import axios from 'axios'
import Header from './Header'
import qAndA from './qAndA'
const ANSWERS_URL = 'http://localhost:3000/answers'



//const QUESTION_URL = 'https://quiz-app-solid-adventure.herokuapp.com/questions'
//const ANSWERS_URL = 'https://quiz-app-solid-adventure.herokuapp.com/answers'

class Game extends Component {
  constructor(props) {
    super()
      this.state = {
        gameData: [],
        guess: '', //sets the guess
        chosen: '', //set the prefix to the guess
        qIdX: 0
      }
      this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    const topicId = this.props.match.params.topicId
    this.setState({gameData: qAndA[topicId]})
    console.log(this.props.match.params.topicId)
  }


  handleClick(e){
    const guess = e.target.outerText
    const chosen = 'Your guess:'
    if (this.state.guess === ''){
      this.setState({guess: guess})
      this.setState({chosen: chosen}) //// time out 3 secs then fetch next index (next question) from state maybe this.state.gameData + 1
    //setTimeout(function(){ this.setState({gameData: 123}); }, 3000);//a way to bring in the next q and a's
    }
    this.setState({qIdX: this.state.qIdX + 1}) //TODO conditional chnage header to say ur done after last question! put this in a different button

  }
  
  render() {
    console.log(this.state.gameData)
    return(
      <div>
        <Header />
        { this.state.gameData.length &&
          <>
          <div>{this.state.gameData[this.state.qIdX].question}</div>

          <div style={{backgroundColor: 'red'}}className="container">
          <button onClick={this.handleClick}>{this.state.gameData[this.state.qIdX].answers[0]}</button>
          <button onClick={this.handleClick}>{this.state.gameData[this.state.qIdX].answers[1]}</button>
          <button onClick={this.handleClick}>{this.state.gameData[this.state.qIdX].answers[2]}</button>
          <button onClick={this.handleClick}>{this.state.gameData[this.state.qIdX].answers[3]}</button>
        </div>
        </>
        }

        <div style={{textAlign: 'center', marginTop: '30px'}}>{this.state.chosen}{this.state.guess}</div>
      </div>
    )
  }
}

export default Game

//need something on state...maybe current question index

//conditionally show a button to increnment the qidx by one
//reset the guess for the next answer
