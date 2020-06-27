// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './pages/home.js';
import Episodes from './pages/episodes.js';
import App from './App.js';

const AppRoutes = () => (
	<App>
		<Switch>
			<Route exact path="/episodes" component={Episodes} />
			<Route exact path="/" component={Home} />
		</Switch>
	</App>
);

export default AppRoutes;
