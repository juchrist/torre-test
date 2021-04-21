import React from 'react';
import loadjs from 'loadjs';
/*import { Link } from 'react-router-dom';
import { loadOptions } from '@babel/core';
import Script from 'react-load-script';*/

import Header from './header';
import Footer from './footer';
import '../';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

  componentWillMount(){
      loadjs('../jquery-3.3.1.min.js');
  }
	

	render() {
		return (
      <div>
      <Header />
      
      
                  <div>
              {/* banner section */}
              <section id="home" className="w3l-banner py-5">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12 mt-lg-0 mt-4">
                      <div className="img-effect text-lg-center">
                        <img src="../images/bg.png" alt="myphoto" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10 mt-lg-0 mt-4">
                      <span className="title-small">Hello</span>
                      <h1 className="mb-2 title"> <span>I'm</span> Ore Juwon Christopher</h1>
                      <h1 className="mb-4 title"> a <span className="typed-text"></span><span className="cursor">&nbsp;</span></h1>
                      <p>I am enthusiastic about working in a challenging environment where I will
                        be able to learn, develop, maximize and utilize my passion, skills and intelligence to provide
                        solutions to real-life problems. I believe that I will be a valuable asset to your company and startup.</p>
                      <div className="mt-sm-5 mt-4">
                        <a className="btn btn-primary btn-style mr-2" href="contact.html"> Contact Me</a>
                        <a className="btn btn-outline-primary btn-style mr-2" href="#portfolio">Resume </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* //banner section */}
          </div>

            <Footer />
            </div>         
		)
  }

  
}



export default Main;