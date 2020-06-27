//Dependencies
import React, { Fragment } from 'react';

//Components
import Characters from '../services/Characters.js';
import Deaths from '../services/Deaths.js';

const Home = (props) => {
	return (
		<Fragment>
			<div className="Home">
				<h1>Home Page</h1>
				<Characters />
			</div>
		</Fragment>
	);
};

export default Home;
