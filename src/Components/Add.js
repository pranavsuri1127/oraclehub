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

    render() {
        const { hubid } = this.props;
        return(
            <div className="container">
                <form id='uploadForm' action={'http://localhost:3001/upload/'+hubid} method='post' encType="multipart/form-data">
                    <h3>Add Images</h3>
                    <div className="file-upload btn btn-primary">
                        <span>BROWSE</span>
                        <input type="file" id="FileAttachment" className="upload" name="sampleFile" onChange={this.submitForm}/>
                    </div><br/>
                    <input className="outergalContainer" type="text" id="fileuploadurl" readOnly placeholder="Maximum file size is 1GB" />
                </form>
            </div>                 
        )
    }
}

export default Add;