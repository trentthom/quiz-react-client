import React, { Component } from "react"
import data from './dummydata'
import axios from 'axios'

const TOPIC_URL = 'https://quiz-app-solid-adventure.herokuapp.com/topics'
const QUESTION_URL = 'https://quiz-app-solid-adventure.herokuapp.com/questions'
const ANSWERS_URL = 'https://quiz-app-solid-adventure.herokuapp.com/answers'


class Game extends React.Component {
  constructor(props) {
    super()
      this.state = {
        question: '',
        answers1: '',
        ans2: '',
      }
  }

  // componentDidMount(){
  //   axios.get(TOPIC_URL).then((response) => {
  //     console.log(response)
  //     //this.setState({sounds: padData})
  //   })
  // }

  componentDidMount(){
    axios.get(QUESTION_URL).then((response) => {
      console.log(response.data[0])
      const question = response.data[0].content
      this.setState({question: question})

      axios.get(ANSWERS_URL).then((response) => {
        console.log(response.data)
        const question = response.data[0].content
        // this.setState({question: question})
      })
    })
  }

  render() {
    return(
      <div>
        <div className='question'><h1>{this.state.question}</h1></div>

        <div style={{backgroundColor: 'red'}}className="container">
          <div style={{lineHeight: '100px', backgroundColor: 'blue'}}></div>
          <div style={{lineHeight: '100px'}}>multi choise answer</div>
          <div style={{lineHeight: '100px'}}>multi choise answer</div>
          <div style={{lineHeight: '100px'}}>multi choise answer</div>
        </div>
      </div>
    )
  }
}

export default Game
