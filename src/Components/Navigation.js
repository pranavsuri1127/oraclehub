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
				<div className="oraclelogotext">Digital Signage</div>
			</nav>
		)
	}
}

export default Navigation;