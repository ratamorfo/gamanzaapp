import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Body extends Component {
	static propTypes = {
		body: PropTypes.object.isRequired
	};
	render() {
		const { body } = this.props;
		return <div className="main_content">{body}</div>;
	}
}
export default Body;
