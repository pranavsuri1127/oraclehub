import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Gallery from './Components/Gallery';
import Add from './Components/Add';
// import PropTypes from 'prop-types';
// import logo from './Components/logo.png';

// let imglist = ["https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg","https://wallpaper-gallery.net/images/images/images-2.jpg","https://www.w3schools.com/w3css/img_lights.jpg","https://www.oxforduniversityimages.com/images/rotate/Image_Spring_17_4.gif"];
// export const imglist = [{
//                 pic:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//                 id: 1
//               },
//               {
//                 pic: "https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg",
//                 id: 2
//               },
//               {
//                 pic: "https://wallpaper-gallery.net/images/images/images-2.jpg",
//                 id: 3
//               },
//               {
//                 pic: "https://www.w3schools.com/w3css/img_lights.jpg",
//                 id: 4
//               },
//               {
//                 pic: "https://www.oxforduniversityimages.com/images/rotate/Image_Spring_17_4.gif",
//                 id: 5
//               }];
class App extends Component {
  constructor(){
    super();
    // this.hubChange = this.hubChange.bind(this);
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
// imglist.propTypes = {
//   CONTENT: PropTypes.string,
//   IMG_ID: PropTypes.number
// }
  hubChange = (event) => {
    console.log(event.target.value);
    var hubval = event.target.value;
    fetch('http://localhost:3001/images/'+hubval).then(res=>res.json()).then(data=>{
      console.log(data)
      this.setState({
        d:data,
        hval: hubval,
        loaded: 0
      })
    });
  }
    //   handleselectedFile = (event) => {

		// fetch('http://localhost:3001/upload/'+this.state.hval,{method: 'POST'}).then(res=>res.json())
		// .then(data=>{
    //   console.log(event.target.files[0]);
    //   console.log(data);
    //   this.setState({
    //     selectedFile: event.target.files[0],
    //     hval: event.target.value,
    //     loaded: 1
    //   })
    //   alert(this.selectedFile+"got uploaded to server");
		//   this.setState({
		// 	d:data,
		// 	loaded: 0
		//   })
		// })
        // const data = new FormData()
        // data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    // }
  render() {
    return (
      <div >
        <Navigation hubChangeval={this.hubChange}/>
        <Add hubid={this.state.hval}/>
        <Gallery images={this.state.d}/>
      </div>
    );
  }
}

export default App;

// export default {
//   data,App
// };