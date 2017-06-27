import React from 'react';
import { render } from 'react-dom';
import Layout from './modules/layout';
import "./modules/layout.scss";
import { Router } from 'react-router';
import Routes from './routes';
import history from './history';
render(
	<Router history={history}>
		<Routes />
	</Router>
	,document.getElementById("root")
);