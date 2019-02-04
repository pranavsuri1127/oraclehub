import React from 'react';
// import {data} from '../App';
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


class Gallery extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		d:[],
	// 		loading: false
	// 	}
	// }
	componentWillMount(){
		//   this.setState({
		// 	loading: true,
		// 	d:data
		//   });
	  }
	deleteImg = (event) => {
		console.log(event.target.id);
		fetch('http://localhost:3001/delete/'+event.target.id,{method: 'DELETE'}).then(res=>res.json())
		.then(data=>{
		  alert(data);
		//   this.setState({
		// 	d:data,
		// 	loaded: 0
		//   })
		})
		// var array = data;
		// var index = array.indexOf(e.target.id);
		// console.log(array);
		// if(index !== -1)
		// {
		// 	// delete array[(e.target.id-1)];
		// 	array.splice(index,1);
		// 	this.setState({
		// 		d:array
		// 	});
		// }
		// this.setState({d: this.state.imglist.filter(function(person) { 
		// 	return imglist !== e.target.value 
		// })});
		// console.log(array);
	}
	componentDidMount() {
		this.setState({loading: true});
		// alert("The image is deleted");
	}	
	render() {
		const { images } = this.props
		return(
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
		)
	}
}

export default Gallery;

// const Gallery=({images})=>{
// 	return(
// 		<div className="galContainer">
// 		{
// 			images.map((images,i)=>{
// 	          return(
// 	        	<div key={i} className="imgContainer">
// 	           		<img  src={images.pic} alt="Hub Images" width="400px"/>
// 			   		<button id={images.id} className="remove-image" styles="display: inline;">&#215;</button>
// 	           	</div>
// 	           )
// 			})
// 		}
// 		</div>
// 	)
// }

// export default Gallery;