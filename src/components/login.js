import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header';
import Footer from './footer';

class Login extends React.Component {
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
                    

            <div className="container-fluid">
            <div className="row no-gutter">
              <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
              <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-9 col-lg-8 mx-auto pl-5 pr-5">
                        <h3 className="login-heading mb-4">Welcome back!</h3>
                        <form>
                          <div className="form-label-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                            <label htmlFor="inputEmail">Email address / Mobile</label>
                          </div>
                          <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                            <label htmlFor="inputPassword">Password</label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                          </div>
                          <a href="index-2.html" className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign in</a>
                          <div className="text-center pt-3">
                            Don’t have an account? <Link className="font-weight-bold" to="/register">Sign Up</Link>
                          </div>
                        </form>
                        <hr className="my-4" />
                        <p className="text-center">LOGIN WITH</p>
                        <div className="row">
                          <div className="col pr-2">
                            <button className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Google</button>
                          </div>
                          <div className="col pl-2">
                            <button className="btn pl-1 pr-1 btn-lg btn-facebook font-weight-normal text-white btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Facebook</button>
                          </div>
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

export default Login;