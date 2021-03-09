import React, { Component } from "react"
import axios from 'axios'

const QUESTION_URL = 'http://localhost:3000/questions'
//const QUESTION_URL = 'https://quiz-app-solid-adventure.herokuapp.com/questions'
//const ANSWERS_URL = 'https://quiz-app-solid-adventure.herokuapp.com/answers'
const ANSWERS_URL = 'http://localhost:3000/answers'


class Game extends Component {
  constructor(props) {
    console.log(props)
    super()
      this.state = {
        question: '',
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
        guess: ''
      }
      this.handleClick = this.handleClick.bind(this)
  }

  //^^^ We prob need to also put the answers in an empty array [] (or perhaps object {}???) so we can use it for any set of 4 Qs related to any Q

//dynamically link the right questions to answers
  componentDidMount(){
    axios.get(QUESTION_URL).then((response) => {
      console.log(response.data)
      const question = response.data[0].content
      //console.log(question)
      this.setState({question: question})

      axios.get(ANSWERS_URL).then((response) => {
        console.log(response.data)
        const ans1 = response.data[0].content
        const ans2 = response.data[1].content
        const ans3 = response.data[2].content
        const ans4 = response.data[3].content
        //const correct
        this.setState({ans1: ans1})
        this.setState({ans2: ans2})
        this.setState({ans3: ans3})
        this.setState({ans4: ans4})
        //this.setState
      })
    })
  }

  handleClick(e){
    //console.log(e.target.value)
    const guess = e.target.value
    //console.log(guess)
    this.setState({verdict: guess})
  }

  render() {
    return(
      <div>
        <div className='question'><h1>{this.state.question}</h1></div>

        <div style={{backgroundColor: 'red'}}className="container">
          <button value={this.state.ans1} id='button1' onClick={this.handleClick} style={{lineHeight: '100px'}}>{this.state.ans1}</button>
          <button value={this.state.ans2} id='button2' onClick={this.handleClick} style={{lineHeight: '100px'}}>{this.state.ans2}</button>
          <button value={this.state.ans3} id='button3' onClick={this.handleClick} style={{lineHeight: '100px'}}>{this.state.ans3}</button>
          <button value={this.state.ans4} id='button4' onClick={this.handleClick} style={{lineHeight: '100px'}}>{this.state.ans4}</button>
        </div>

        <div style={{lineHeight: 12, textAlign: 'center'}}>{this.state.verdict}</div>
      </div>
    )
  }
}

export default Game

//
