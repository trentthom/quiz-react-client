import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import { useHistory } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './Game'

const TOPIC_URL = 'http://localhost:3000/topics.json'

class Home extends React.Component{
  constructor(){
    super()
    this.state = {
      topics: []
    }
  }

  componentDidMount(){
    axios.get(TOPIC_URL).then((response) => {
      this.setState({topics: response.data});
    })
  }

  render(){
    const topicLinks = this.state.topics.map(t => {
      return(
        <div class="grow" id="topicButton" key={t.id}>
          <a href={`/topics/${t.id}`}>{t.title}</a>
        </div>
      )
    })
    return(

      <div>
        <div>
        <Header />
        </div>
        <div>
        <h2>Pick a topic to start playing!</h2>
        </div>
        {topicLinks}
      </div>
    )
  }
}

export default Home
