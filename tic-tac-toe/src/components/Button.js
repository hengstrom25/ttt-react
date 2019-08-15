import React from 'react';
import '../index.css';

const Button = (props) => {

	return (
  		<div>
  			<button className="button button_font" onClick={props.onGameReset}>
				NEW GAME
  			</button>
   		</div>
  );
			
}

export default Button;