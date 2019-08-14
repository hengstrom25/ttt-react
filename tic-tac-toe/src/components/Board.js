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
		let squares = this.state.squares.slice();
		squares[i] = this.state.playerX ? 'X' : 'O';
		this.setState({
			squares: squares,
			playerX: !this.state.playerX
		});
	}
			
		
	render() {	
		return (
  			<div className="board">
  				<table>
  					<tbody>
						<tr>
							<td><Square value={this.state.squares[0]}
									onClick={() => this.handleClick(0)}/></td>
							<td><Square value={this.state.squares[1]}
									onClick={() => this.handleClick(1)}/></td>
								<td><Square value={this.state.squares[2]}
									onClick={() => this.handleClick(2)}/></td>
						</tr>
						<tr>
							<td><Square value={this.state.squares[3]}
									onClick={() => this.handleClick(3)}/></td>
							<td><Square value={this.state.squares[4]}
									onClick={() => this.handleClick(4)}/></td>
							<td><Square value={this.state.squares[5]}
									onClick={() => this.handleClick(5)}/></td>
						</tr>
						<tr>
							<td><Square value={this.state.squares[6]}
									onClick={() => this.handleClick(6)}/></td>
							<td><Square value={this.state.squares[7]}
									onClick={() => this.handleClick(7)}/></td>
							<td><Square value={this.state.squares[8]}
									onClick={() => this.handleClick(8)}/></td>
						</tr>	
					</tbody>						
			</table>
   		</div>
  );
  }
			
}

export default Board;