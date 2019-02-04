import React from 'react';
import logo from './logo.png';

class Navigation extends React.Component {
	render() {
		const { hubChangeval } = this.props;
		return (
			<nav className="main" >
				<div className="adjust">
					<img alt="Oracle Logo" src={logo} />
				</div>
				<select className="select" onChange={hubChangeval.bind(this)}>
					<option value="hub1">Bangalore Hub</option>
					<option value="hub2">Reston Hub</option>
					<option value="hub3">Austin Hub</option>
				</select>
			</nav>
		)
	}
}
export default Navigation;