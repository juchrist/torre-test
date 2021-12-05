import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
	constructor(props) {
    super(props);
  	}
	

	
	render() {
		return (
                    
            <div>
            <footer className="pt-4 pb-4 text-center">
              <div className="container">
                <p className="mt-0 mb-0">© Copyright 2019 Osahan Eat. All Rights Reserved - Motionwares Redesign</p>
                <small className="mt-0 mb-0"> Made with <i className="fas fa-heart heart-icon text-danger" /> by
                  <a className="text-danger" target="_blank" href="https://www.github.com/juchrist">Ore Juwon</a> for <a className="text-primary" target="_blank" href="https://motionwares.com/">Motionwares</a>
                </small>
              </div>
            </footer>
          </div>
    
              

		)
	}
}

export default Footer;