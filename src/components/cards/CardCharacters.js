// Dependencies
import React, { Fragment } from 'react';
import { Card, CardMedia, CardContent } from '@material-ui/core';

function CardCharacter({ character }) {
	return (
		<Fragment>
			<Card className="character">
				<CardMedia image={character.img} />
				<CardContent>
					<p className="character_name">
						<span className="subtitle">Name: </span>
						{character.name}
					</p>
					<p className="character_status">
						<span className="subtitle">Status: </span>
						{character.status}
					</p>
					<p className="character_portrayer">
						<span className="subtitle">Portrayed: </span>
						{character.portrayed}
					</p>
					<p className="character_birthday">
						<span className="subtitle">Birthday: </span>
						{character.birthday}
					</p>
					<p className="character_occupation">Occupations:</p>
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
