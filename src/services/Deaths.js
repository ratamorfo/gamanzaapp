// Dependencies
import React, { Component } from 'react';
import axios from 'axios';

//Components
import ListDeaths from '../components/cards_list/ListDeaths.js';

class Deaths extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deathsData: [],
			totalDeaths: 0
		};
	}

	componentDidMount() {
		axios
			.get('https://www.breakingbadapi.com/api/deaths')
			.then((res) => {
				let deathsData = res.data;
				deathsData = deathsData.slice(0, 5);
				this.setState({
					deathsData
				});
				console.log('Deaths', res);
			})
			.catch(console.log);

		axios
			.get('https://www.breakingbadapi.com/api/death-count')
			.then((res) => {
				const totalDeaths = res.data[0].deathCount;
				this.setState({
					totalDeaths
				});
			})
			.catch(console.log);
	}

	render() {
		const { deathsData, totalDeaths } = this.state;
		return (
			<div className="deaths">
				<p>Total Deaths: {totalDeaths}</p>
				<h3>Deaths</h3>
				<ListDeaths deaths={deathsData} />
			</div>
		);
	}
}

export default Deaths;
