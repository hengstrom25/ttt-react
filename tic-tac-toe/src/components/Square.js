import React, {Component} from 'react';
import '../index.css';

class Square extends Component { 
	constructor(props) {
		super(props);
		
	this.state = {
		value: null
	}
}

	handleClick = event => {
		this.setState({value: 'X'})
	};
	
	render() {

		return (
  			<div>
  				<button className="square" onClick={e => this.handleClick(e)}>
  					{this.state.value}
  				</button>
   			</div>
   		)
  };
			
}

export default Square;

