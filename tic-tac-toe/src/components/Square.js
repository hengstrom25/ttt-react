import React, {Component} from 'react';
import '../index.css';

class Square extends Component { 
	
	render() {

		return (
  			<div>
  				<button className={"square" + (this.props.winning? ' winning' : '')} onClick={() => this.props.onClick()}>
  					<span className="pieces">{this.props.value}</span>
  				</button>
   			</div>
   		)
  };
			
}

export default Square;

