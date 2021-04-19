import React from 'react';
import loadjs from 'loadjs';
import { Link } from 'react-router-dom';
import { loadOptions } from '@babel/core';
import Script from 'react-load-script';

import Header from './header';
import Footer from './footer';

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	

	render() {
		return (
            <div>
            <Header />      
      
                  <div>
                    {/* about breadcrumb */}
                    <section className="w3l-about-breadcrumb text-center">
                      <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                        <div className="container py-2">
                          <h2 className="title">About Me</h2>
                          <ul className="breadcrumbs-custom-path mt-2">
                            <li><a href="#url">Home</a></li>
                            <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true" /> About Me </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    {/* //about breadcrumb */}
                    {/* about page about section */}
                    <section className="w3l-aboutblock1" id="about">
                      <div className="midd-w3 py-5">
                        <div className="container py-lg-5 py-md-3">
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="position-relative">
                                <img src="../images/juchrist2.jpg" alt="" className="radius-image img-fluid" style={{height: '350px'}} />
                              </div>
                            </div>
                            <div className="col-lg-7 mt-lg-0 mt-5">
                              <h5 className="title-small mb-2">Meet Me</h5>
                              <p className="mt-4">I'm Ore Christopher Juwon (Juchrist), a Full Stack Software and Web Developer. 
                                I am a graduate of Computer Science from the University of Ilorin,Ilorin, Nigeria.</p>
                              <p className="mt-4">I am a young developer proficient majorly in PHP and JavaScript with about 5 years of practical
                                and industry experience who is very open and enthusiastic about working in a challenging environment where I will
                                be able to learn, develop, maximize and utilize my passion, skills and intelligence to provide
                                solutions to real-life problems. I believe that I will be a valuable asset to your company and startup.</p>
                              <p className="mt-4">I am currently open to remote openings. I am proficient in the English and Yoruba Langauges.</p>
                              {/*a href="#download" class="btn btn-style btn-primary mt-lg-5 mt-4">Download CV</a*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* //about page about section */}
                    {/* about page second section */}
                    <div className="py-5 w3l-resume">
                      <div className="container py-lg-5 py-3">
                        <h5 className="title-small mb-2"> Technologies</h5>
                        <h3 className="title-big mb-4">Technologies i can use! </h3>
                        <div className="row features-w3pvt-main mt-5 pt-md-3" id="features">
                          <div className="col-lg-1 col-md-1 col-1 feature-gird">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-10 featured_grid_right_info">
                                <img src="../images/php.svg" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-1 feature-gird mt-md-0 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-12 featured_grid_right_info">
                                <img src="../images/laravel.svg" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-1 feature-gird mt-lg-0 mt-md-5 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-12 featured_grid_right_info">
                                <img src="../images/codeigniter.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-md-0 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-10 featured_grid_right_info">
                                <img src="../images/javascript.svg" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-lg-0 mt-md-5 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-12 featured_grid_right_info">
                                <img src="../images/node.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-lg-0 mt-md-5 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-12 featured_grid_right_info">
                                <img src="../images/mysql.svg" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-lg-0 mt-md-5 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-10 featured_grid_right_info">
                                <img src="../images/html-5.svg" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-lg-0 mt-md-5 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-12 featured_grid_right_info">
                                <img src="../images/css.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-lg-0 mt-md-5 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-12 featured_grid_right_info">
                                <img src="../images/bootstrap.svg" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-lg-0 mt-md-5 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-10 featured_grid_right_info">
                                <img src="../images/react.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-lg-0 mt-md-5 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-12 featured_grid_right_info">
                                <img src="../images/wordpress.svg" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-lg-0 mt-md-5 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-12 featured_grid_right_info">
                                <img src="../images/download.jpg" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-lg-0 mt-md-5 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-10 featured_grid_right_info">
                                <img src="../images/heroku.svg" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-md-0 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-12 featured_grid_right_info">
                                <img src="../images/download.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-1 col-md-2 feature-gird mt-lg-0 mt-md-5 mt-4">
                            <div className="row features-hny-inner-gd">
                              <div className="col-md-12 col-12 featured_grid_right_info">
                                <img src="../images/vue.svg" alt="" className="img-fluid" />
                              </div>
                            </div>
                            <div className="col-lg-1 col-md-2 feature-gird mt-lg-0 mt-md-5 mt-4">
                              <div className="row features-hny-inner-gd">
                                <div className="col-md-12 col-12 featured_grid_right_info">
                                  <img src="../images/git.svg" alt="" className="img-fluid" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* //about page about section */}

                  </div>

            <Footer />
            </div>         
		)
  }

  
}



export default About;