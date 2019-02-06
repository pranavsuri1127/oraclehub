import React from 'react';
import logo from './logo.png';

class Navigation extends React.Component {
	render() {
		// const { hubChangeval } = this.props;
		return (
			<nav className="main" >
				<div className="adjust">
					<img alt="Oracle Logo" src={logo} />
				</div>
				<div className="paddings"></div>
				<div className="adjust">
					<h4><a href=".">Gallery</a></h4>
				</div>
			</nav>
		)
	}
}

export default Navigation;