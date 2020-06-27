// Dependencies
import React, { Component } from 'react';
import axios from 'axios';

//Components
import ListCharacters from '../components/cards_list/ListCharacters.js';

class Characters extends Component {
	constructor(props) {
		super(props);
		this.toggleSortName = this.toggleSortName.bind(this);
		this.toggleSortBirthday = this.toggleSortBirthday.bind(this);
		this.toggleSortPortrayed = this.toggleSortPortrayed.bind(this);
		this.loadMoreItems = this.loadMoreItems.bind(this);
		this.state = {
			charactersData: [],
			next: 6
		};
	}

	sortByName() {
		const { charactersData } = this.state;
		let newPostList = charactersData;
		newPostList = charactersData.sort((a, b) => a.name.localeCompare(b.name));
		this.setState({
			charactersData: newPostList
		});
	}

	toggleSortName(event) {
		this.sortByName();
	}

	sortByBirthday() {
		const { charactersData } = this.state;
		let newPostList = charactersData;
		newPostList = charactersData.sort((a, b) => a.birthday > b.birthday);
		this.setState({
			charactersData: newPostList
		});
	}

	toggleSortBirthday(event) {
		this.sortByBirthday();
	}

	sortByPortrayed() {
		const { charactersData } = this.state;
		let newPostList = charactersData;
		newPostList = charactersData.sort((a, b) => a.portrayed.localeCompare(b.portrayed));
		this.setState({
			charactersData: newPostList
		});
	}

	toggleSortPortrayed(event) {
		this.sortByPortrayed();
	}

	componentDidMount() {
		axios
			.get('https://www.breakingbadapi.com/api/characters?limit=6')
			.then((res) => {
				const charactersData = res.data;
				this.setState({
					charactersData,
					next: this.state.next + 6
				});
			})
			.catch(console.log);
	}

	loadMoreItems(event) {
		const { next } = this.state;
		axios
			.get('https://www.breakingbadapi.com/api/characters?limit=6&offset=' + next)
			.then((res) => {
				let charactersData = this.state.charactersData;
				const newarray = res.data;
				charactersData = charactersData.concat(newarray);
				this.setState({
					charactersData,
					next: next + 6
				});
			})
			.catch(console.log);
	}

	render() {
		const { charactersData } = this.state;
		return (
			<div className="characters">
				<div className="sort_section">
					<h3>Sort By</h3>
					<button onClick={this.toggleSortName}>Name</button>
					<button onClick={this.toggleSortBirthday}>Birthday</button>
					<button onClick={this.toggleSortPortrayed}>Portrayed</button>
				</div>
				<ListCharacters characters={charactersData} />
				<div className="load_more">
					<button onClick={this.loadMoreItems}>Load More</button>
				</div>
			</div>
		);
	}
}

export default Characters;
