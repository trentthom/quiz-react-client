import React, { Component } from "react"
import axios from 'axios'

//const TOPIC_URL = 'http://localhost:3000/topics'
const QUESTION_URL = 'http://localhost:3000/questions'
//const QUESTION_URL = 'https://quiz-app-solid-adventure.herokuapp.com/questions'
//const ANSWERS_URL = 'https://quiz-app-solid-adventure.herokuapp.com/answers'
const ANSWERS_URL = 'http://localhost:3000/answers'


class Game extends React.Component {
  constructor(props) {
    super()
      this.state = {
        question: '',
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: ''
      }
  }

  componentDidMount(){
    axios.get(QUESTION_URL).then((response) => {
      const question = response.data[0].content
      this.setState({question: question})

      axios.get(ANSWERS_URL).then((response) => {
        const ans1 = response.data[0].content
        const ans2 = response.data[1].content
        const ans3 = response.data[2].content
        const ans4 = response.data[3].content
        this.setState({ans1: ans1})
        this.setState({ans2: ans2})
        this.setState({ans3: ans3})
        this.setState({ans4: ans4})
      })
    })
  }

  handleClick(){
    console.log('clicked')
  }

  render() {
    return(
      <div>
        <div className='question'><h1>{this.state.question}</h1></div>

        <div style={{backgroundColor: 'red'}}className="container">
          <button onClick={this.handleClick} style={{lineHeight: '100px'}}>{this.state.ans1}</button>
          <button onClick={this.handleClick} style={{lineHeight: '100px'}}>{this.state.ans2}</button>
          <button onClick={this.handleClick} style={{lineHeight: '100px'}}>{this.state.ans3}</button>
          <button onClick={this.handleClick} style={{lineHeight: '100px'}}>{this.state.ans4}</button>
        </div>

        <div style={{lineHeight: 12, textAlign: 'center'}}>QUESTION RIGHT OR WRONG</div>
      </div>
    )
  }
}

export default Game
