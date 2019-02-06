import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Gallery from './Components/Gallery';
import Add from './Components/Add';

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
        loaded: 0
      })
      
    })
  }

  // hubChange = (event) => {
  //   console.log(event.target.value);
  //   var hubval = event.target.value;
  //   fetch('http://localhost:3001/images/'+hubval).then(res=>res.json()).then(data=>{
  //     console.log(data)
  //     this.setState({
  //       d:data,
  //       hval: hubval,
  //       loaded: 0
  //     })
  //   });
  // }

  render() {
    return (
      <div >
        <Navigation />
        <div className="container">
          <Gallery images={this.state.d} />
          <Add hubid={this.state.hval}/>
        </div>
      </div>
    );
  }
}

export default App;