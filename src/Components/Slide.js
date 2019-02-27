import React from 'react';
import rarrow from './rightarrow.png';
import larrow from './leftarrow.png';
class Slide extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        allimg:[],
        currentIndex: 0,
        translateValue: 0
      }
    }
    
    componentWillMount(){
      setInterval(function(){ 
        fetch('http://solutionengineering-devops.us.oracle.com:3002/allimages').then(res=>res.json()).then(data=>{
          console.log(data)
           this.goToNextSlide();
            this.setState({
              allimg:data,
            });
          })
        }.bind(this), 3000);
      }

      
      
      goToPrevSlide = () => {
        if(this.state.currentIndex === 0)
        return;        
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + this.slideWidth()
        }))
      }
      
      goToNextSlide = () => {        
        if(this.state.currentIndex === this.state.allimg.length - 1) {
          return this.setState({
            currentIndex: 0,
          translateValue: 0
        })
      }
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
    
    slideWidth = () => {
      if(document.querySelector('.slide')!=null){
        return document.querySelector('.slide').clientWidth;
      }
      return null;
    }

    componentDidMount(){
      document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "interactive") {      //same as:  document.addEventListener("DOMContentLoaded"...   // same as  jQuery.ready
          console.log("All HTML DOM elements are accessible");
        }
        if (event.target.readyState === "complete") {
          console.log("Now external resources are loaded too, like css,src etc... ");      
        }
      });
    }
    render() {
      
      return (
        <div className="slider">
          <div className="slider-wrapper" style={{transform: `translateX(${this.state.translateValue}px)`,transition: 'transform ease-out 0.45s'}}>
          {
            this.state.allimg.map((image, i) => (
              <Images key={i} image={image.CONTENT} />
            ))
          }
          </div>
          {/* <LeftArrow goToPrevSlide={this.goToPrevSlide} />  
          <RightArrow goToNextSlide={this.goToNextSlide} /> */}
        </div>
      );
    }
  }
  
  const Images = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
  }
  
  const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        <img aria-hidden title="Back Arrow" alt="Back Arrow"  src={larrow}/>
      </div>
    );
  }
  
  const RightArrow = (props) => {
    return (
      <div className="nextArrow arrow" onClick={props.goToNextSlide}>
        <img aria-hidden title="Next Arrow" alt="Next Arrow"  src={rarrow}/>
      </div>
    );
  }

  export default Slide;