import React, { Component } from "react"
import axios from 'axios'
import Header from './Header'
// const ANSWERS_URL = 'http://localhost:3000/answers'



//const QUESTION_URL = 'https://quiz-app-solid-adventure.herokuapp.com/questions'
//const ANSWERS_URL = 'https://quiz-app-solid-adventure.herokuapp.com/answers'

const Question = (props) => {
  return (

    <div>{props.question}</div>

  )
}
const Answers = (props) => {
  return (
    props.answers.map(a => {
        return (
          <button onClick={props.handleClick}>{a.content}</button>
        )
    })
  )
}

class Game extends Component {
  constructor(props) {
    super()
    this.state = {
        question: '',
        answers: [],
        topic: '',
        guess: '',
        chosen: '',
        score: 0,
        questionNumber: 0
      }
      this.handleClick = this.handleClick.bind(this)
      this.testingChangeQuestion = this.testingChangeQuestion.bind(this)
  }

  componentDidUpdate(){
    const path = this.props.location.pathname
    const TOPIC_URL = `http://localhost:3000${path}`
    const questionNumber = this.state.questionNumber
    axios.get(TOPIC_URL).then((response) => {
      console.log(response)
      const data = response.data
      this.setState({topic: data.title, question: data.questions[questionNumber].content, answers: data.questions[questionNumber].answers}) ////loads data into state
      console.log('flag2', this.state.gameData);
    })
  }
  componentDidMount(){
    const path = this.props.location.pathname
    const TOPIC_URL = `http://localhost:3000${path}`
    const questionNumber = this.state.questionNumber
    axios.get(TOPIC_URL).then((response) => {
      console.log(response)
      const data = response.data
      this.setState({topic: data.title, question: data.questions[questionNumber].content, answers: data.questions[questionNumber].answers}) ////loads data into state
      console.log('flag2', this.state.gameData);
    })
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

  testingChangeQuestion(e) {
    const question = this.state.questionNumber +1
    this.setState({questionNumber: question })
  }

  render() {
    console.log('flag', this.state.gameData);

    const topicAnswer = this.state.answers.map(a => {
      return(
        <button onClick={this.handleClick}>{a.content}</button>
      )
    })

    return(
      <div>
      <Header />
      <div>{ this.state.topic }</div>
        <Question question={this.state.question} />

        <div style={{backgroundColor: 'red'}}className="container">
          <Answers answers={this.state.answers} click={this.handleClick} />
        </div>
        </>
        }

        <div style={{textAlign: 'center', marginTop: '30px'}}>{this.state.chosen}{this.state.guess}</div>
        <button onClick={this.testingChangeQuestion}>some text</button>
      </div>
    )
  }
}

export default Game

//need something on state...maybe current question index

//conditionally show a button to increnment the qidx by one
//reset the guess for the next answer
