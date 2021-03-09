import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import { useHistory } from 'react-router-dom'
//import Game from './Game'

const TOPIC_URL = 'http://localhost:3000/topics'

class Home extends React.Component{
  constructor(){
    super()
    this.state = {
      t1: '',
      t2: '',
      t3: '',
      t4: '',
      t5: '',
      t6: '',
      t7: '',
      t8: '',
      t9: '',
      t10: ''
    }
  }
  ///need to figure a way to get all topic data back and then spilt that out onto topic buttons and then pass that to game page
  // find a way to make it dynamic based upon how many topics we have. ie. more topic buttons appear when we add more topics
  componentDidMount(){
    axios.get(TOPIC_URL).then((response) => {
      const t1 = response.data[0].title
      const t2 = response.data[1].title
      this.setState({t1: t1})
      this.setState({t2: t2})
    })
  }
  //try and make game page load based on which topic is clicked




  // gameChanger = () => {
  //   let path =
  //   const history = useHistory()
  //   const handleClick1 = () => history.push('/Game')
  // }


///need to pass this.state.t1 down to <Game />
  render(){
    return(
      <div>
        <Header />
        <div onClick={this.gameChanger} style={{margin: 20}}>   {this.state.t1}    </div>
        <div style={{margin: 20}}>{this.state.t2}</div>
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
