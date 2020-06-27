// Dependencies
import React, { Fragment } from 'react';
import { Card, CardContent } from '@material-ui/core';

function CardDeath({ death }) {
	return (
		<Fragment>
			<Card className="death">
				<CardContent>
					<p className="death_name">{death.death}</p>
					<p className="death_cause">{death.cause}</p>
					<p className="death_responsible">{death.responsible}</p>
					<p className="death_last_words">{death.lastwords}</p>
				</CardContent>
			</Card>
		</Fragment>
	);
}

export default CardDeath;
