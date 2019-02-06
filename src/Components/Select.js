import React from 'react';
import './../App.css';

class Select extends React.Component {
	render() {
		const { hubChangeval } = this.props;
		return (
            <div className="selectContainer">
				<select className="select" onChange={hubChangeval.bind(this)}>
					<option value="hub1">Bangalore Hub</option>
					<option value="hub2">Reston Hub</option>
					<option value="hub3">Austin Hub</option>
				</select>
			</div>
		)
	}
}

export default Select;