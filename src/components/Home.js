import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import { useHistory } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './Game'
//import Game from './Game'

const TOPIC_URL = 'http://localhost:3000/topics'

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

  render(){

    const topicsDiv = this.state.topics.map(t => {
      console.log(this.state.topics)
      return(
        <div>{t.title}</div>
      )
    })

    const topicId = this.state.topics.map(t => {
      console.log(this.state.topics)
      return(
        //<div>{t.title}</div>
        <div>{t.id}</div>
      )
    })

    console.log('flag', this.state.topics)
    return(
      <div>
      //{JSON.stringify(this.state.topics[0])}
        <Header />
        <div>   { this.state.topics.length &&
           <a href={`/Game/${this.state.topics[0].id}`}>{this.state.topics[0].title}</a>}
        </div>
        <div style={{margin: 20}}></div>
        <a href={`/Game/${topicId}`}>{topicsDiv}{topicId}</a>

      </div>
    )
  }
}

export default Home

//make game a child of home to pass the prop down (which would be the name of the topic)

//how do we make an onClick render the Game page????

//check components for props in dev tools

//   // how do we tell the href link to go to `/Game/topics/${params.topicId}/questions/${params.questionId}` - is that the right thing to do ????
