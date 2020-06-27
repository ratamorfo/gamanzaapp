// Dependencies
import React, { Component } from 'react';
import axios from 'axios';

class Deaths extends Component {
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
				const charactersData = res.data.results;
				this.setState({
					charactersData,
					next: res.data.next
				});
				console.log('Did Mount', res);
			})
			.catch(console.log);
	}

	render() {
		return <div className="characters" />;
	}
}

export default Deaths;
