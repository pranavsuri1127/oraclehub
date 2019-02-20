import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Slide from "./Slide";
import Navigation from './Navigation';
import Gallery from './Gallery';
import Footer from './Footer';

const RouteData = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/Slides" component={Slides} />
    </div>    
  </Router>
)

const Home = () => (
  <div>
    <Navigation />
    <div id="mheight">
      <h1 className="outergalContainer">Admin for Digital Signage</h1>
      <Gallery />
    </div>
    <Footer />
  </div>
);

const Slides = () => (
  <div id="sliderview">
    <Slide/>
  </div>
)

export default RouteData;