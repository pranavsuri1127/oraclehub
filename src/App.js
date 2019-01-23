import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Gallery from './Components/Gallery';
import Add from './Components/Add';
import PropTypes from 'prop-types';

// let imglist = ["https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg","https://wallpaper-gallery.net/images/images/images-2.jpg","https://www.w3schools.com/w3css/img_lights.jpg","https://www.oxforduniversityimages.com/images/rotate/Image_Spring_17_4.gif"];
let imglist = [{
                pic:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                id: 1
              },
              {
                pic: "https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg",
                id: 2
              },
              {
                pic: "https://wallpaper-gallery.net/images/images/images-2.jpg",
                id: 3
              },
              {
                pic: "https://www.w3schools.com/w3css/img_lights.jpg",
                id: 4
              },
              {
                pic: "https://www.oxforduniversityimages.com/images/rotate/Image_Spring_17_4.gif",
                id: 5
              }];
imglist.propTypes = {
  pic: PropTypes.string,
  id: PropTypes.number
}
class App extends Component {
  constructor(){
    super();
    this.state={
      d:[]
    }
  }
  componentWillMount(){
    // fetch('http://localhost:3010/img').then(res=>res.json())
    // .then(data=>{
    //    console.log(data)
      this.setState({
        d:imglist
      })
      
    // })
  }

  render() {
    return (
      <div >
      <Navigation/>
      <Add/>
      <Gallery images={this.state.d}/>
      </div>
    );
  }
}

export default App;