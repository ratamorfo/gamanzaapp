// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Resources
import '../resources/styles/style.css';

class Header extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired
	};

	render() {
		const { items } = this.props;
		return (
			<header className="header">
				<ul className="main_menu">
					{items &&
						items.map((item, key) => (
							<li key={key}>
								<Link to={item.url}>{item.title}</Link>
							</li>
						))}
				</ul>
			</header>
		);
	}
}

export default Header;
