import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	

	
	render() {
		return (
                    
            <div className="navbar navbar-expand-lg navbar-light bg-light osahan-nav shadow-sm">
            <div className="container">
              <a className="navbar-brand" href="index-2.html">Motionwares</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to="/">Sign Up <span className="sr-only">(current)</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
              

		)
	}
}

export default Header;