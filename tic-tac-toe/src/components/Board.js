import React, { Component } from 'react';
import Square from '../components/Square'
import '../index.css';

class Board extends Component { 
	render() {	
		return (
  			<div className="board">
  				<table>
					<tr>
						<td><Square value={0}/></td>
						<td><Square value={1}/></td>
						<td><Square value={2}/></td>
					</tr>
					<tr>
						<td><Square value={3}/></td>
						<td><Square value={4}/></td>
						<td><Square value={5}/></td>
					</tr>
					<tr>
						<td><Square value={6}/></td>
						<td><Square value={7}/></td>
						<td><Square value={8}/></td>
					</tr>							
			</table>
   		</div>
  );
  }
			
}

export default Board;