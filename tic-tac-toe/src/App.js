import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Game from './containers/Game';

class App extends Component {
	render() {
  		return (
			<div>
				<Game />
			</div>
		)
	}
};

export default App;
