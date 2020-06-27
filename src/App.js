//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './components/Header.js';
import Content from './components/Body.js';
import items from './components/Menu.js';

class App extends Component {
	static propTypes = {
		content: PropTypes.array.isRequired
	};

	render() {
		const content = this.props;
		return (
			<div className="App">
				<Header items={items} />
				<Content content={content} />
			</div>
		);
	}
}

export default App;
