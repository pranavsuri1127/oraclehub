import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Gallery from './Components/Gallery';

class App extends Component {
  constructor(){
    super();
    this.state={
      d:[],
      selectedFile: null, 
      hval: null,
      loaded: 0
    }
  }
  componentWillMount(){
    fetch('http://localhost:3001/images/hub1').then(res=>res.json())
    .then(data=>{
      console.log(data)
      this.setState({
        d:data,
        hval: 'hub1',
      });      
    })
  }

  render() {
    return (
      <div>        
        <Navigation />
        <div className="container outercontainer">
          <h1 className="outergalContainer">Admin for Digital Signage</h1>
          <Gallery images={this.state.d} />
        </div>
      </div>
    );
  }
}

export default App;