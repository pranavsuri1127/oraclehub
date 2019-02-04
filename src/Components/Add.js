import React from 'react';

class Add extends React.Component {
    constructor(){
        super();
        this.state={
          selectedFile: null, 
          loaded: 0          
        }
        // this.handleselectedFile = this.getRestaurants.bind(this);
    }
    // handleselectedFile = (event,hv) => {
    //     console.log(event.target.files[0]);
    //     this.setState({
    //         selectedFile: event.target.files[0],
    //         loaded: 1
    //     })
    //     console.log(hv);
	// 	fetch('http://localhost:3001/upload/'+hv,{method: 'POST'}).then(res=>res.json())
	// 	.then(data=>{
	// 	  alert(this.selectedFile+"got uploaded to server");
	// 	//   this.setState({
	// 	// 	d:data,
	// 	// 	loaded: 0
	// 	//   })
	// 	})
    //     // const data = new FormData()
    //     // data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    // }
    submitForm=(event)=>{
        event.preventDefault();
        console.log("window.location.href");
         document.getElementById("uploadForm").submit();
    }

    componentDidMount()
    {
    }

    render() {
        const { hubid } = this.props;
        // this.props.hubChange(data1);
        console.log(this.state.loaded);
        return(
            <form id='uploadForm' action={'http://localhost:3001/upload/'+hubid} method='post' encType="multipart/form-data">
                <div className="tooltip">
                    <span className="tooltiptext">Add Images</span>
                    <label htmlFor="file-input">
                        <div className="add">
                            <div id="parent">
                                <div id="div1"></div>
                                <div id="div2"></div>
                            </div>
                        </div>
                    </label>
                    <input id="file-input" type="file" name="sampleFile" onChange={this.submitForm} />     
                </div>    
            </form>                 
        )
    }
}
export default Add;
//<div>{this.state.loaded}</div> <span>hub id = {hubid}</span>

// const submitForm=()=>{
//     console.log(window.location.href)
//      document.getElementById("uploadForm").submit();
// }