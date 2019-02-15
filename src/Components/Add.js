import React from 'react';
import upload from './upload.png';

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

    render() {
        const { hubid } = this.props;
        return(
            <div className="container2">
                <form id='uploadForm' action={'http://solutionengineering-devops.us.oracle.com:3002/upload/'+hubid} method='post' encType="multipart/form-data">
                    <h3>Add Images</h3>
                    <div className="file-upload btn btn-primary">
                        <img aria-hidden title="Upload Images" alt="Upload Image" src={upload} />
                        <input type="file" id="FileAttachment" className="upload" name="file" onChange={this.submitForm}/>
                    </div><br/>
                    <input className="outergalContainer" type="text" id="fileuploadurl" readOnly placeholder="Maximum file size is 1GB" />
                </form>
            </div>                 
        )
    }
}

export default Add;