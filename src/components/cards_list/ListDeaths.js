//Dependencies
import React, { Fragment } from 'react';

//Components
import CardCharacters from '../cards/CardCharacters.js';

//Resources
import '../../resources/styles/characters.css';

function ListDeaths({ characters }) {
	return (
		<Fragment>
			<div className="list_characters">
				{characters.map((character, key) => {
					return <CardCharacters key={key} character={character} />;
				})}
			</div>
		</Fragment>
	);
}

export default ListDeaths;
