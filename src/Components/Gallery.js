import React from 'react';

// state = { 
// 	data: [],
// 	loading: false
// }

// componentDidMount() {
// 	this.setState({loading: true})
// }

// componentDidUpdate() {
// 	alert("The image is deleted")
// }

// deleteImg(e)
// {
// 	var array = [this.state.d];
// 	var index = array.indexOf(e.target.value);
// 	if(index !== -1)
// 	{
// 		array.splice(index,1)
// 	}
// 	this.setState({
// 		d:array
// 	})
// }

const Gallery=({images})=>{
	return(
		<div className="galContainer">
		{
			images.map((images,i)=>{
	          return(
	        	<div key={i} className="imgContainer">
	           		<img  src={images.pic} alt="Hub Images" width="400px"/>
			   		<button id={images.id} className="remove-image" styles="display: inline;">&#215;</button>
	           	</div>
	           )
			})
		}
		</div>
	)
}

export default Gallery;