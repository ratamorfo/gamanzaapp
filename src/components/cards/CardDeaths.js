// Dependencies
import React, { Fragment } from 'react';
import { Card, CardContent } from '@material-ui/core';

function CardDeath({ death }) {
	return (
		<Fragment>
			<Card className="death">
				<CardContent>
					<p className="death_name">
						<span className="subtitle">Name: </span>
						{death.death}
					</p>
					<p className="death_cause">
						<span className="subtitle">Cause: </span>
						{death.cause}
					</p>
					<p className="death_responsible">
						<span className="subtitle">Responsible: </span>
						{death.responsible}
					</p>
					<p className="death_last_words">
						<span className="subtitle">Last Words: </span>
						{death.last_words}
					</p>
				</CardContent>
			</Card>
		</Fragment>
	);
}

export default CardDeath;
