import React from 'react';
//import loadjs from 'loadjs';
import ReactDOM from 'react-dom';
//import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/style-starter.css';
import About from './components/about';
import Main from './components/main';
import Resume from './components/resume';
import Contact from './components/contact';
import * as serviceWorker from './serviceWorker';
/*<Route path='/state/:name' component={State} />
<Route path='/about' component={About} />
<Route path='/api' component={Api} />*/


ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={Main} />
			<Route path='/about' component={About} />
			<Route path='/resume' component={Resume} />
			<Route path='/contact' component={Contact} />
		</div>
	</Router>,
document.getElementById('root'));

serviceWorker.unregister();
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA