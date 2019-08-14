import React, {Component} from 'react';
import '../index.css';

class Square extends Component { 
	
	render() {

		return (
  			<div>
  				<button className="square pieces" onClick={() => this.props.onClick()}>
  					{this.props.value}
  				</button>
   			</div>
   		)
  };
			
}

export default Square;

