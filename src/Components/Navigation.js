import React from 'react';
import logo from './logo.png';
import logout from './logout.png';

class Navigation extends React.Component {
	render() {
		return (
			<nav className="main" >
				<div className="adjust">
					<img alt="Oracle Logo" src={logo} />
				</div>
				<div className="oraclelogotext">Digital Signage</div>
				<div className="logout">
					<a href="https://apex.oraclecorp.com/pls/apex/f?p=10841:2">
						<img alt="Logout" title="Logout" src={logout} />
					</a>
				</div>
			</nav>
		)
	}
}

export default Navigation;