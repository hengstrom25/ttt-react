import React, {Component } from 'react';
import Title from '../components/Title'
import Board from '../components/Board'
import Button from '../components/Button'

class Game extends Component {

	constructor(props) {
		super(props)
		this.handleReset = this.handleReset.bind(this);
	}
	
	handleReset() {
		this.refs.board.resetGame();
	}
	
	render() {
		return(
			<div>
				<Title />
				<Board ref="board"/>
				<Button onGameReset={this.handleReset}/>
			</div>
		)	
	};

}

export default Game