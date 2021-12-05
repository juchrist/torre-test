import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header';
import Footer from './footer';

class Error extends React.Component {
	constructor(props) {
		super(props);
/*		this.state = {websites: []}; 
		this.headers = [
			{ key: 'id', label: 'Id'},
			{ key: 'title', label: 'Title' },
			{ key: 'url', label: 'URL' }
		];
		this.deleteWebsite = this.deleteWebsite.bind(this);*/
	}
	

	
	render() {
		return (
            <div>
            <Header />
            <div className="section pt-5 pb-5 osahan-not-found-page">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center pt-5 pb-5">
                    <img className="img-fluid" src="img/404.png" alt={404} />
                    <h1 className="mt-2 mb-2">Page not found</h1>
                    <p>Uh-oh! Looks like the page you are trying to access, doesn't <br />exist. Please start afresh.</p>
                    <Link className="btn btn-primary btn-lg" to="/">GO HOME</Link>
                    </div>
                </div>
                </div>
            </div>
            
            <Footer />
            </div>                

              

		)
	}
}

export default Error;