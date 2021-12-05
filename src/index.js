import React from 'react';
import loadjs from 'loadjs';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Error from './components/404';
//import Register from './controllers/register';
import Profile from './components/profile';
import Header from './components/header';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
	<Router>
		<div>
		<Switch>
			<Route exact path='/' component={Header} />
			<Route  path='/p/:username' component={Profile} />
			<Route path='*' component={Error} />
		</Switch>
		</div>
	</Router>,
document.getElementById('root'));

serviceWorker.unregister();
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA