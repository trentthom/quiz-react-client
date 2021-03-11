import React, { Component } from "react"
import axios from 'axios'
import data from './dummydata'
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
      this.setState({chosen: chosen}) ////set timer and then fetch next index (next question)
    }
  }

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

        <div style={{textAlign: 'center', marginTop: '30px'}}>{this.state.chosen}{this.state.guess}</div>
        <button onClick={this.testingChangeQuestion}>some text</button>
      </div>
    )
  }
}

export default Game

//
// componentDidMount(){
//   axios.get(QUESTION_URL).then((response) => {
//     console.log(response.data)
//     const question = response.data[0].content
//     //console.log(question)
//     this.setState({question: question})
//
//     axios.get(ANSWERS_URL).then((response) => {
//       console.log(response.data)
//       const ans1 = response.data[0].content
//       const ans2 = response.data[1].content
//       const ans3 = response.data[2].content
//       const ans4 = response.data[3].content
//       //const correct
//       this.setState({ans1: ans1})
//       this.setState({ans2: ans2})
//       this.setState({ans3: ans3})
//       this.setState({ans4: ans4})
//       //this.setState
//     })
//   })
// }


//<button value={this.state.ans4} id='button4' onClick={this.handleClick} style={{lineHeight: '100px'}}>{this.state.ans4}</button>
