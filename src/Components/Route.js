import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Slide from "./Slide";
import Navigation from './Navigation';
import Gallery from './Gallery';

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
    <div>
      <h1 className="outergalContainer">Admin for Digital Signage</h1>
      <Gallery />
    </div>
  </div>
);

const Slides = () => (
  <div>
    <Slide/>
  </div>
)

export default RouteData;