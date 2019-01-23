import React from 'react';

const Navigation=()=>{
	return(
		<nav className="main" >
			<div className="adjust">
				<img alt="Oracle Logo" src="http://solutionengineering.us.oracle.com/excellence/css/images/logo.png" />
			</div>
			<select className="select">
			  <option value="hub1">Bangalore Hub</option>
			  <option value="hub2">Reston Hub</option>
			  <option value="hub3">Austin Hub</option>
				<option value="hub4">Santa Monica Hub</option>
				<option value="hub5">Burlington Hub</option>
			</select>
		</nav>
	)
}



export default Navigation;