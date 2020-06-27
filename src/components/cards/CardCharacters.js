// Dependencies
import React, { Fragment } from 'react';
import { Card, CardMedia, CardContent } from '@material-ui/core';

function CardCharacter({ character }) {
	return (
		<Fragment>
			<Card className="character">
				<CardMedia image={character.img} />
				<CardContent>
					<p className="character_name">{character.name}</p>
					<p className="character_staus">{character.status}</p>
					<p className="character_portrayer">{character.portrayed}</p>
					<p className="character_birthday">{character.birthday}</p>
					<p lassName="character_occupation">Occupations:</p>
					<ul className="character_occupation_list">
						{character.occupation.map((occupation, key) => {
							return <li key={key}>{occupation}</li>;
						})}
					</ul>
				</CardContent>
			</Card>
		</Fragment>
	);
}

export default CardCharacter;
