import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Slide from './Components/Slide';
// import App from './App';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <ul className="header">
                    <li><NavLink exact to="/slide">Slider</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/slide" component={Slide}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;