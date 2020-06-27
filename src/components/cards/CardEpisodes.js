// Dependencies
import React, { Fragment } from 'react';
import { Card, CardMedia, CardContent } from '@material-ui/core';

function CardEpisodes({ character }) {
	return (
		<Fragment>
			<Card className="character">
				<CardMedia image="" />
				<CardContent>
					<p className="character_name">{character.name}</p>
				</CardContent>
			</Card>
		</Fragment>
	);
}

export default CardEpisodes;
