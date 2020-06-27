// Dependencies
import React, { Component } from 'react';
import axios from 'axios';

//Components
import ListCharacters from '../components/cards_list/ListCharacters.js';

class Characters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			charactersData: []
		};
	}

	componentDidMount() {
		axios
			.get('https://www.breakingbadapi.com/api/characters?limit=6')
			.then((res) => {
				const charactersData = res.data;
				this.setState({
					charactersData,
					next: '/api/characters?limit=6&offset=6'
				});
				console.log('Did Mount', charactersData);
			})
			.catch(console.log);
	}

	render() {
		const { charactersData } = this.state;
		return (
			<div className="characters">
				<ListCharacters characters={charactersData} />
			</div>
		);
	}
}

export default Characters;
