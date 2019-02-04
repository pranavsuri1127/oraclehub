import React from 'react';

class Delete extends React.Component {
    constructor(){
        super();
        this.state={
            loading: false
        }
        // this.handleselectedFile = this.getRestaurants.bind(this);
    }
    componentDidMount() {
        this.setState({loading: true});
        alert("The image is deleted");
    }

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
    render() {
        return (
            <div >
                <Navigation/>
                <Add upload={this.state.loaded}/>
                <Gallery images={this.state.d}/>
            </div>
        );
    }
}
export default Delete;