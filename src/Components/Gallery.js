import React from 'react';
import Select from './Select';
import Add from './Add';

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
		fetch('http://solutionengineering-devops.us.oracle.com:3002/delete/'+event.target.id,{method: 'DELETE'}).then(res=>res.json())
		.then(data=>{
		  alert(data);
		})
	}
	hubChange = (event) => {
    console.log(event.target.value);
    var hubval = event.target.value;
    fetch('http://solutionengineering-devops.us.oracle.com:3002/images/'+hubval).then(res=>res.json()).then(data=>{
      console.log(data)
      this.setState({
        d:data,
        hval: hubval,
        loaded: 0
			})
			const images = this.state.d;
			this.props.images.forEach(item => {
				images.push({'id': item.IMG_ID, 'content': item.CONTENT});
		 });
    });
  }
	componentDidMount() {
		console.log("The image is loaded");
		fetch('http://solutionengineering-devops.us.oracle.com:3002/images/hub1').then(res=>res.json())
    .then(data=>{
      console.log(data)
      this.setState({
        d:data,
        hval: 'hub1',
        loaded: 0
      })
      
    })
	}	
	render() {
		return(
			<div className="outergalContainer">
				<div className="innergalContainer">
					<Select hubChangeval={this.hubChange}/>			
					<Add hubid={this.state.hval}/>
				</div>
				<div className="galContainer">
					{this.state.d.map((item,i) => (
						<div key={i} className="imgContainer">
							<img id={item.IMG_ID} src={item.CONTENT} alt="Hub Images" height="150px" />
							<button id={item.IMG_ID} className="remove-image" styles="display: inline;" onClick={this.deleteImg}>&#215;</button>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Gallery;