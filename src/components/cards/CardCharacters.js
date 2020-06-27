// Dependencies
import React, { Fragment } from 'react';
import { Card, CardMedia, CardContent } from '@material-ui/core';

function CardCharacter({ character }) {
	return (
		<Fragment>
			<Card className="character">
				<CardMedia image="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
				<CardContent>
					<p className="character_name">{character.name}</p>
				</CardContent>
			</Card>
		</Fragment>
	);
}

export default CardCharacter;
