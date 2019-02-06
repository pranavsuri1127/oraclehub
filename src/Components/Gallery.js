import React from 'react';
import Select from './Select';

class Gallery extends React.Component {
  constructor(){
    super();
    this.state={
      d:[],
      selectedFile: null, 
      hval: null,
      loaded: 0
    }
  }
	deleteImg = (event) => {
		console.log(event.target.id);
		fetch('http://localhost:3001/delete/'+event.target.id,{method: 'DELETE'}).then(res=>res.json())
		.then(data=>{
		  alert(data);
		})
	}
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
	componentDidMount() {
		this.setState({loading: true});
		console.log("The image is loaded");
	}	
	render() {
		const { images } = this.props
		return(
			<div className="outergalContainer">
				<Select hubChangeval={this.hubChange}/>			
				<div className="galContainer">
				{
					images.map((images,i)=>{
						return(
							<div key={i} className="imgContainer">
								<img id={images.IMG_ID} src={images.CONTENT} alt="Hub Images" width="400px" />
								<button id={images.IMG_ID} className="remove-image" styles="display: inline;" onClick={this.deleteImg}>&#215;</button>
							</div>
						)
					})
				}
				</div>
			</div>
		)
	}
}

export default Gallery;