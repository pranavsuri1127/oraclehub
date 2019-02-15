import React from 'react';
import FullScreen from 'react-fullscreen';
import BackgroundSlideshow from 'react-background-slideshow';

class Slide extends React.Component { 
    constructor(){
        super();
        this.state={
            allimg:[],
            isFull: false
        }
    }
    goFull = () => {
        this.setState({ isFull: true });
        window.open(window.location.href, '', 'fullscreen=yes, scrollbars=auto');
        document.documentElement.webkitRequestFullScreen();
    }

    
    componentWillMount(){
        fetch('http://solutionengineering-devops.us.oracle.com:3002/allimages').then(res=>res.json()).then(data=>{
            console.log(data)
            this.setState({
                allimg:data,
            });
            // var button = document.querySelector('#fs-doc-button');
            // button.addEventListener('click', fullscreen);

        })
    }
    render() {
        return (
            <FullScreen>
                <div>
                    {this.state.allimg.map((item,i) => (
                        <BackgroundSlideshow key={i} id={item.IMG_ID} images={[item.CONTENT]} />
                    ))}                   
                </div>
            </FullScreen>   
        );
    }
}
export default Slide;