import React, { Component } from "react"
import axios from 'axios'
import data from './dummydata'
import Header from './Header'
const ANSWERS_URL = 'http://localhost:3000/answers'


//const QUESTION_URL = 'https://quiz-app-solid-adventure.herokuapp.com/questions'
//const ANSWERS_URL = 'https://quiz-app-solid-adventure.herokuapp.com/answers'

class Game extends Component {
  constructor(props) {
    super()
      this.state = {
        gameData: [],
        guess: '',
        chosen: ''
      }
      this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    const path = this.props.location.pathname
    const QUESTION_URL = `http://localhost:3000${path}`
    axios.get(QUESTION_URL).then((response) => {
      console.log(response)
      this.setState({gameData: response}) ////loads data into state

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

  render() {
    return(
      <div>
      <Header />
        <div>question</div>

        <div style={{backgroundColor: 'red'}}className="container">
          <button onClick={this.handleClick}>1</button>
          <button onClick={this.handleClick}>2</button>
          <button onClick={this.handleClick}>3</button>
          <button onClick={this.handleClick}>4</button>
        </div>

        <div style={{textAlign: 'center', marginTop: '30px'}}>{this.state.chosen}{this.state.guess}</div>
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
