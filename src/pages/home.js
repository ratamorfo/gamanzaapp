//Dependencies
import React, { Fragment } from 'react';

//Components
import Characters from '../services/Characters.js';
import Deaths from '../services/Deaths.js';

const Home = (props) => {
	return (
		<Fragment>
			<div className="Home">
				<h2>List of Characteres and Deaths</h2>
				<Characters />
				<Deaths />
			</div>
		</Fragment>
	);
};

export default Home;
