import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import { useHistory } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './Game'
//import Game from './Game'

// const TOPIC_URL = 'http://localhost:3000/topics'
const TOPIC_URL = 'https://quiz-app-solid-adventure.herokuapp.com/topics'

class Home extends React.Component{
  constructor(){
    super()
    this.state = {
      topics: []
    }
  }
  ///need to figure a way to get all topic data back and then spilt that out onto topic buttons and then pass that to game page
  // find a way to make it dynamic based upon how many topics we have. ie. more topic buttons appear when we add more topics
  componentDidMount(){
    console.log(this.state)
    axios.get(TOPIC_URL).then((response) => {
      console.log('json data',response.data)
      this.setState({topics: response.data})

    })
  }
  //try and make game page load based on which topic is clicked




  // gameChanger = () => {
  //   let path =
  //   const history = useHistory()
  //   const handleClick1 = () => history.push('/Game')
  // }

  //





///need to pass this.state.t1 down to <Game />
  render(){

    console.log('flag', this.state.topics)
    return(
      <div>
      //{JSON.stringify(this.state.topics[0])}
        <Header />
        <div>   { this.state.topics.length &&
           <a href={`/game/${this.state.topics[0].id}`}>{this.state.topics[0].title}</a>
        }   </div>
        <div style={{margin: 20}}></div>
        <div></div>
      </div>
    )
  }
}

export default Home

//make game a child of home to pass the prop down (which would be the name of the topic)

//how do we make an onClick render the Game page????

//check components for props in dev tools

//
