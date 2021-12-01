import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header';
import Footer from './footer';

class Register extends React.Component {
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
 
            <div className="container-fluid">
                <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-9 col-lg-8 mx-auto pl-5 pr-5">
                        <h3 className="login-heading mb-4" align="center"><strong>Motionwares</strong></h3>
                            <h3 className="login-heading mb-4">Create Profile And Get Hired Quickly!</h3>
                            <form>
                            <div className="form-label-group">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                                <label htmlFor="inputEmail">Full Name</label>
                            </div>
                            <div className="form-label-group">
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                                <label htmlFor="inputPassword">Phone Number</label>
                            </div>
                            <div className="form-label-group mb-4">
                                <input type="text" id="ptext" className="form-control" placeholder="Promocode" />
                                <label htmlFor="ptext">Email Address</label>
                            </div>
                            <div className="form-label-group mb-4">
                                <input type="text" id="ptext" className="form-control" placeholder="Promocode" />
                                <label htmlFor="ptext">Password</label>
                            </div>
                            <a href="index-2.html" className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign Up</a>
                            <div className="text-center pt-3">
                                Already have a Profile? <Link className="font-weight-bold" to="/p/Juchrist">View Profile</Link>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
            </div>                

              

		)
	}
}

export default Register;