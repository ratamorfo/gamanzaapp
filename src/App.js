//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './components/Header.js';
import Content from './components/Body.js';

// Menu
import items from './components/Menu.js';

class App extends Component {
	static propTypes = {
		children: PropTypes.object.isRequired
	};

	render() {
		const { children } = this.props;

		return (
			<div className="App">
				<Header items={items} />
				<Content body={children} />
			</div>
		);
	}
}

export default App;
