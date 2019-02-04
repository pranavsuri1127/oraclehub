import React from 'react';

class Delete extends React.Component {
    constructor(){
        super();
        this.state={
            loading: false
        }
    }
    componentDidMount() {
        this.setState({loading: true});
        console.log("The image is loaded");
    }

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