import React, { Component } from 'react';
import Square from '../components/Square'
import '../index.css';

class Board extends Component { 

	constructor(props) {
		super(props)
		
		this.state = {
			squares: [" "," "," "," "," "," "," "," "," "],
			playerX: true
		}
	}
	
	handleClick(i) {
		const squares = this.state.squares.slice();
		squares[i] = this.state.playerX ? 'X' : 'O';
		this.setState({
			squares: squares,
			playerX: !this.state.playerX
		});
	}
	
	resetGame(){
		this.setState({
			squares: [" "," "," "," "," "," "," "," "," "],
			playerX: true
		})
	}
	
	winningRow() {
		const win_combinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
		const result = win_combinations.filter(combo => {
			const c1=combo[0]
			const c2=combo[1]
			const c3=combo[2]
			return (this.state.squares[c1] !== " " && this.state.squares[c1] === this.state.squares[c2] && this.state.squares[c1] === this.state.squares[c3])
		});
		if (result.length > 0)
			return result[0]
		else
			return [];
	}
				
	render() {	
		const wonRow = this.winningRow();
		
		return (
  			<div className="board">
  				<table>
  					<tbody>
						<tr>
							<td><Square value={this.state.squares[0]} 
									winning={wonRow.includes(0)}
									onClick={() => this.handleClick(0)}/></td>
							<td><Square value={this.state.squares[1]}
									winning={wonRow.includes(1)}
									onClick={() => this.handleClick(1)}/></td>
							<td><Square value={this.state.squares[2]}
									winning={wonRow.includes(2)}
									onClick={() => this.handleClick(2)}/></td>
						</tr>
						<tr>
							<td><Square value={this.state.squares[3]}
									winning={wonRow.includes(3)}							
									onClick={() => this.handleClick(3)}/></td>
							<td><Square value={this.state.squares[4]}
									winning={wonRow.includes(4)}							
									onClick={() => this.handleClick(4)}/></td>
							<td><Square value={this.state.squares[5]}
									winning={wonRow.includes(5)}							
									onClick={() => this.handleClick(5)}/></td>
						</tr>
						<tr>
							<td><Square value={this.state.squares[6]}
									winning={wonRow.includes(6)}							
									onClick={() => this.handleClick(6)}/></td>
							<td><Square value={this.state.squares[7]}									
									winning={wonRow.includes(7)}
									onClick={() => this.handleClick(7)}/></td>
							<td><Square value={this.state.squares[8]}
									winning={wonRow.includes(8)}							
									onClick={() => this.handleClick(8)}/></td>
						</tr>	
					</tbody>						
			</table>
   		</div>
  	);
  }
			
}


export default Board;

