import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Gallery from './Components/Gallery/Gallery';
class App extends Component {
  constructor(){
    super();
    this.state={
      d:[]
    }
  }
  componentWillMount(){
    fetch('http://localhost:3001/images/').then(res=>res.json())
    .then(data=>{
       console.log(data)
      this.setState({
        d:data
      })
      
    })
  }

  render() {
    return (
      <div >
      <Navigation/>
      <Gallery images={this.state.d}/>
      </div>
    );
  }
}

export default App;
