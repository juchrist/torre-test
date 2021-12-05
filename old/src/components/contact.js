import React from 'react';
/*import loadjs from 'loadjs';
import { Link } from 'react-router-dom';
import { loadOptions } from '@babel/core';
import Script from 'react-load-script';*/

import Header from './header';
import Footer from './footer';

class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	

	render() {
		return (
            <div>
            <Header />
      
      
                  <div>
                    {/* contact breadcrumb */}
                    <section className="w3l-about-breadcrumb text-center">
                      <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                        <div className="container py-2">
                          <h2 className="title">Contact Me</h2>
                          <ul className="breadcrumbs-custom-path mt-2">
                            <li><a href="#url">Home</a></li>
                            <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true" /> Contact </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    {/* contact breadcrumb */}
                    {/* contact block */}
                    {/* contact1 */}
                    <section className="w3l-contact-1 py-5">
                      <div className="contacts-9 py-lg-5 py-md-4">
                        <div className="container">
                          <div className="d-grid contact-view">
                            <div className="cont-details">
                              <div className="cont-top">
                                <div className="cont-left text-center">
                                  <span className="fa fa-phone text-primary" />
                                </div>
                                <div className="cont-right">
                                  <p><a href="tel:+234 814 434 3941">+234 814 434 3941</a></p>
                                </div>
                              </div>
                              <div className="cont-top margin-up">
                                <div className="cont-left text-center">
                                  <span className="fa fa-envelope-o text-primary" />
                                </div>
                                <div className="cont-right">
                                  <p><a href="mailto:kingjuwon4christ@gmail.com" className="mail">kingjuwon4christ@gmail.com</a></p>
                                </div>
                              </div>
                              <div className="cont-top margin-up">
                                <div className="cont-left text-center">
                                  <span className="fa fa-map-marker text-primary" />
                                </div>
                                <div className="cont-right">
                                  <p>Ilorin, Nigeria.</p>
                                </div>
                              </div>
                            </div>
                            <div className="cont-details">
                              <div className="cont-top">
                                <div className="cont-left text-center">
                                  <span className="fa fa-github text-primary" />
                                </div>
                                <div className="cont-right">
                                  <h6 />
                                  <p><a href="https://github.com/juchrist" className="mail">juchrist</a></p>
                                </div>
                              </div>
                              <div className="cont-top margin-up">
                                <div className="cont-left text-center">
                                  <span className="fa fa-facebook text-primary" />
                                </div>
                                <div className="cont-right">
                                  <h6 />
                                  <p><a href="https://facebook.com/ore.christopherjuwon">Ore Christopher Juwon</a></p>
                                </div>
                              </div>
                              <div className="cont-top margin-up">
                                <div className="cont-left text-center">
                                  <span className="fa fa-twitter text-primary" />
                                </div>
                                <div className="cont-right">
                                  <h6 />
                                  <p><a href="https://twitter.com/juchristt" className="mail">@juchristt</a></p>
                                </div>
                              </div>
                              <div className="cont-top margin-up">
                                <div className="cont-left text-center">
                                  <span className="fa fa-linkedin-square text-primary" />
                                </div>
                                <div className="cont-right">
                                  <h6 />
                                  <p><a href="https://www.linkedin.com/in/ore-christopher-juwon-7b4858104" className="mail">Ore Juwon Christopher</a></p>
                                </div>
                              </div>
                              <div className="cont-top margin-up">
                                <div className="cont-left text-center">
                                  <span className="fa fa-instagram text-primary" />
                                </div>
                                <div className="cont-right">
                                  <h6 />
                                  <p><a href="https://instagram.com/juchrist" className="mail">@juchrist</a></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                  </div>

            <Footer />
            </div>         
		)
  }

  
}



export default Contact;