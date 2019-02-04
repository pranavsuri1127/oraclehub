import React from 'react';

class Add extends React.Component {
    constructor(){
        super();
        this.state={
          selectedFile: null, 
          loaded: 0          
        }
    }
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
        // console.log(this.state.loaded);
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