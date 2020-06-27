// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Episodes from './pages/episodes.js';
import Home from './pages/home.js';
import App from './App';

const AppRoutes = () => (
	<App>
		<Switch>
			<Route exact path="/episodes" component={Episodes} />
			<Route exact path="/" component={Home} />
		</Switch>
	</App>
);

export default AppRoutes;
