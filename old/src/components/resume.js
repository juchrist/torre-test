import React from 'react';
import loadjs from 'loadjs';
/*import { Link } from 'react-router-dom';
import { loadOptions } from '@babel/core';
import Script from 'react-load-script';*/

import Header from './header';
import Footer from './footer';

class Resume extends React.Component {
	constructor(props) {
		super(props);
	}

  componentWillMount() {
    loadjs('../jquery-3.3.1.min.js');
        loadjs('../owl.carousel.js');
  }
    

	render() {
		return (
            <div>
            <Header />
            
      
                  <div>
        {/* home page services section */}
        <section className="w3l-services">
          <div className="blog py-5" id="services">
            <div className="container py-lg-5"><br /><br />
              <h5 className="title-small text-center">Experience</h5>
              <h3 className="title-big text-center mb-sm-5 mb-4">Places i have worked</h3>
              <div className="row">
                <div className="col-md-12 mx-auto pr-2">
                  <div className="owl-two owl-carousel owl-theme">
                    <div className="item">
                      <div className="card">
                        <div className="box-wrap">
                          <div className="icon">
                          </div>
                          <h4><a href="#url">Lead Developer</a></h4>
                          <h6><b style={{color: '#3f3a64'}}>Testaplug</b></h6>
                          <i className="read" style={{borderBottom: '2px solid #8e43e7', color: '#000'}}>Mar. 2020 - Present</i>
                          {/*p>I was involved in the Leadership of the Team, Overall Project Coordination
                                      , Development and Maintenance of Web Cloud-Based Software Product</p*/}
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="box-wrap">
                          <div className="icon">
                          </div>
                          <h4><a href="#url">ICT and Media Officer</a></h4>
                          <h6><b style={{color: '#3f3a64'}}>Youth Enhancement Organization, Owerri, Imo State</b></h6>
                          <i className="read" style={{borderBottom: '2px solid #8e43e7', color: '#000'}}>Jan. - Oct. 2019</i>
                          {/*p>I handled the Team Leadership for the Organization's ICT Unit.I also ensured
                                      Provision of Basic Technical Network and Systems Support, Installations, Repairs and Daily
                                      Backups for Organization's ICT Infrastructure</p*/}
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="box-wrap">
                          <div className="icon">
                          </div>                                    
                          <h4><a href="#url">Lead Web Developer and Architect</a></h4>
                          <h6><b style={{color: '#3f3a64'}}>iNerds 360 Digital Agency, Ikeja, Lagos State.</b></h6>
                          <i className="read" style={{borderBottom: '2px solid #8e43e7', color: '#000'}}>April - Sept. 2018</i>
                          {/*p>Development of a Property Sales Portal Web Application and JSON RESTful API (for iOS and
                                      Android Applications Application )with PHP Codeigniter Framework, MySQL, Bootstrap,
                                      Javascript and jQuery, HTML, CSS.</p*/}
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="box-wrap">
                          <h4><a href="#url">Web Developer Intern</a></h4>
                          <h6><b style={{color: '#3f3a64'}}>Glory Icon Nig. Ltd.</b></h6>
                          <i className="read" style={{borderBottom: '2px solid #8e43e7', color: '#000'}}>Aug. - Dec. 2016, Aug. - Dec. 2017</i>
                          {/*p>Development of a Robust and Complex Tertiary Educational Institution Portal’s Timetable
                                      Scheduling, Course Registration and Attendance Modules with PHP Phalcon Framework,
                                      MySQL, Material Design Library, Javascript, jQuery</p*/}
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="box-wrap">
                          <h4><a href="#url">Junior Software Developer</a></h4>
                          <h6><b style={{color: '#3f3a64'}}>Multilent Nig. Ltd., Abuja, Nigeria</b></h6>
                          <i className="read" style={{borderBottom: '2px solid #8e43e7', color: '#000'}}>Jan. - July 2017</i>
                          {/*p>Development of various basic application modules for a Highly Robust and Complex CBT
                                      Software System with Node.js Express Framework and merging on a dedicated Slack
                                      Channel</p*/}
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="box-wrap">
                          <h4><a href="#url">Web Developer (Part-Time)</a></h4>
                          <h6><b style={{color: '#3f3a64'}}>Avark Soft Ltd.</b></h6>
                          <i className="read" style={{borderBottom: '2px solid #8e43e7', color: '#000'}}>Jan - Apr. 2017</i>
                          {/*p>Development of an E-learning and E-library system with PHP Codeigniter Framework,
                                      Bootstrap, MySQL, jQuery, HTML, CSS and Javascript</p*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //home page services section */}
        {/* stats */}
        <section className="w3l-stats py-lg-5 py-4" id="stats">
          <div className="gallery-inner container py-md-5 py-4">
            <h5 className="title-small text-center">Education</h5>
            <div className="row stats-con">
              <div className="col-sm-12 col-12 stats_info counter_grid">
                <h4><a href="#url">University of Ilorin, Ilorin</a></h4>
                <h5><b style={{color: '#3f3a64'}}>B. Sc. Computer Science</b></h5>
                <h6><b style={{color: '#3f3a64'}}>Second Class (Upper Division)</b></h6>
                <i className="read" style={{borderBottom: '2px solid #8e43e7', color: '#000'}}>2014 - 2018</i>
              </div>
            </div>
          </div>
        </section>
        {/* //stats */}
        {/* home page services section */}
        <section className="w3l-services">
          <div className="blog py-5" id="services">
            <div className="container py-lg-5">
              <h5 className="title-small text-center">Some of my Recent Projects</h5>
              <h3 className="title-big text-center mb-sm-5 mb-4">What I do for you</h3>
              <div className="row">
                <div className="col-md-12 mx-auto pr-2">
                  <div className="owl-two owl-carousel owl-theme">
                    <div className="item">
                      <div className="card">
                        <div className="box-wrap">
                          <img src="../images/favicon.ico" alt="" className="img-fluid" style={{height: '50px', width: '300px'}} />
                          <h4 className="number">01</h4>
                          <h4><a href="#url">Testaplug</a></h4>
                          <p>An online assessment platform suitable for use by Schools or Educational Institutions
                            and the Professional Environment</p>
                          <a href="http://www.testaplug.com" className="read">View</a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="box-wrap">
                          <img src="../images/knigeria.PNG" alt="" className="img-fluid" style={{height: '50px', width: '300px'}} />
                          <h4 className="number">02</h4>
                          <h4><a href="#url">Know Nigeria</a></h4>
                          <p>An Informational Platform with an Open Source API that provides various details about 
                            36 Nigerian States.</p>
                          <a href="http://knigeria.herokuapp.com" className="read">View</a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card">
                        <div className="box-wrap">
                          <img src="../images/knigeria.PNG" alt="" className="img-fluid" style={{height: '50px', width: '300px'}} />
                          <h4 className="number">03</h4>
                          <h4><a href="#url">Drash</a></h4>
                          <p>A Food Ordering and Delivery System.</p>
                          <a href="#" className="read">Coming Soon</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //home page services section */}

                  </div>

            <Footer />
            </div>         
		)
  }

  
}



export default Resume;