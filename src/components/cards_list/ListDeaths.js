//Dependencies
import React, { Fragment } from 'react';

//Components
import CardDeaths from '../cards/CardDeaths.js';

//Resources
import '../../resources/styles/characters.css';

function ListDeaths({ deaths }) {
	return (
		<Fragment>
			<div className="list_deaths">
				{deaths.map((death, key) => {
					return <CardDeaths key={key} death={death} />;
				})}
			</div>
		</Fragment>
	);
}

export default ListDeaths;
