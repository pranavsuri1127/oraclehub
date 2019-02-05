import React from 'react';

class Gallery extends React.Component {
	componentWillMount(){
	  }
	deleteImg = (event) => {
		console.log(event.target.id);
		fetch('http://localhost:3001/delete/'+event.target.id,{method: 'DELETE'}).then(res=>res.json())
		.then(data=>{
		  alert(data);
		})
	}
	componentDidMount() {
		this.setState({loading: true});
		console.log("The image is deleted");
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
