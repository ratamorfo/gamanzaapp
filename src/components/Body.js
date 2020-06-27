// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Body extends Component {
	static propTypes = {
		content: PropTypes.array.isRequired
	};

	render() {
		const { content } = this.props;
		return <div className="main_content">{content}</div>;
	}
}

export default Body;
