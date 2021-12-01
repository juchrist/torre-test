import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header';
import Footer from './footer';

class Profile extends React.Component {
	constructor(props) {
		super(props);
    this.state = {id: '', name: '', image: '', headline: '', country: '', bioSummary: '', username: '', date_created: '', skills: [], education: [], interest: [], expereiences: []};
		this.headers = [
			{ key: 'id', label: 'Id'},
			{ key: 'username', label: 'Username' },
		];

    fetch('https://bio.torre.co/api/bios/'+ this.props.match.params.username)
    .then(response => {
      return response.json();
    }).then(result => {
      this.setState({
        id: result.person.id,
        name: result.person.name,
        state_capital: result.state_capital,
        slogan: result.slogan,
         description: result.description,
         population: result.population,
         date_created: result.date_created,
         zip: result.zip,
         official_website: result.official_website,
         logo: result.image,
         zone: result.geo_political_zone
      });
    });  
 

  }
	

	
	render() {
		return (
            <div>
            <Header />
 
            <div>
        <section className="restaurant-detailed-banner" style={{height: '150px'}}>
          <div className="text-center">
            <img className="img-fluid cover" src="../img/login-bg.png"  style={{height: '150px'}}/>
          </div>
          <div className="restaurant-detailed-header">
            <div className="container">
              <div className="row d-flex align-items-end">
                <div className="col-md-8">
                  <div className="restaurant-detailed-header-left">
                    <img className="img-fluid mr-3 float-left" alt="osahan" src="../img/picture.jpg" />
                    <h2 className="text-white">{this.state.name}</h2>
                    <p className="text-white mb-1">I am a Software Engineer based in Ilorin, Kwara with 3 - 5 Years of experience.  I am available for Remote Full Time jobs.


                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="offer-dedicated-nav bg-white border-top-0 shadow-sm">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="nav" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="pills-order-online-tab" data-toggle="pill" href="#pills-order-online" role="tab" aria-controls="pills-order-online" aria-selected="true">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-restaurant-info-tab" data-toggle="pill" href="#pills-restaurant-info" role="tab" aria-controls="pills-restaurant-info" aria-selected="false">Work Expereience</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-book-tab" data-toggle="pill" href="#pills-book" role="tab" aria-controls="pills-book" aria-selected="false">Educational Qualifications</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="offer-dedicated-body-left">
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-order-online" role="tabpanel" aria-labelledby="pills-order-online-tab">
                      <div className="row">
                        <h5 className="mb-4 mt-3 col-md-12">About Me</h5>
                        <div className="col-md-12">
                          <div className="bg-white rounded border shadow-sm mb-4">
                            <div className="gold-members p-3 border-bottom">
                              <div className="media">
                                <div className="media-body">
                                  <p className="text-gray mb-0">
                                    I am a young developer proficient majorly in PHP(Codeigniter and Phalcon) and JavaScript(Node JS and React JS) with about 4-5 years of practical experience. I can work on a full stack pattern and also on a One pattern (MVC and ORM). Iam enthusiastic about working in a challenging environment where I will be able to maximize and utilize my passion, skills and intelligence to provide solutions to real-life problems. I believe that I will be a valuable asset to every organization I am afforded an opportunity.                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <h5 className="mb-4 mt-3 col-md-12">Projects</h5>
                        <div className="col-md-4 col-sm-6 mb-4">
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              <div className="favourite-heart text-danger position-absolute"><a href="#"><i className="icofont-heart" /></a></div>
                              <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div>
                              <a href="#">
                                <img src="../img/login-bg.png" className="img-fluid item-img" />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1"><a href="#" className="text-black">Know Nigeria
                                  </a>
                                </h6>
                                <p className="text-gray mb-2">A Single Page Application developed with a Full-Stack Approach. I used React JS and Boostrap to consume data at the Frontend from a Backend/ JSON RESTful API built with PHP Codeigniter and MySQL. It provides relevant basic information about Nigeria and all it’s states.</p>
                                <p className="text-gray time mb-0"><a className="btn btn-link btn-sm pl-0 text-black pr-0" href="#">PHP, React JS, HTML and CSS </a> 
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              <div className="favourite-heart text-danger position-absolute"><a href="#"><i className="icofont-heart" /></a></div>
                              <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div>
                              <a href="#">
                                <img src="../img/login-bg.png" className="img-fluid item-img" />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1"><a href="#" className="text-black">Project 2</a></h6>
                                <p className="text-gray mb-2">Description</p>
                                <p className="text-gray time mb-0"><a className="btn btn-link btn-sm pl-0 text-black pr-0" href="#">Stack Here </a> <span className="float-right"> 
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <h5 className="mb-4 mt-3 col-md-12">Skills</h5>
                        <div className="col-md-12">
                          <div className="bg-white rounded border shadow-sm">
                            <div className="gold-members p-3 border-bottom">
                              <div className="media">
                                <div className="mr-3"><i className="icofont-ui-press text-danger food-item" /></div>
                                <div className="media-body">
                                  <h6 className="mb-1">HTML</h6>
                                </div>
                              </div>
                            </div>
                            <div className="gold-members p-3 border-bottom">
                              <div className="media">
                                <div className="mr-3"><i className="icofont-ui-press text-danger food-item" /></div>
                                <div className="media-body">
                                  <h6 className="mb-1">React JS</h6>
                                </div>
                              </div>
                            </div>
                            <div className="gold-members p-3 border-bottom">
                              <div className="media">
                                <div className="mr-3"><i className="icofont-ui-press text-success food-item" /></div>
                                <div className="media-body">
                                  <h6 className="mb-1">CSS</h6>
                                </div>
                              </div>
                            </div>
                            <div className="gold-members p-3 border-bottom">
                              <div className="media">
                                <div className="mr-3"><i className="icofont-ui-press text-danger food-item" /></div>
                                <div className="media-body">
                                  <h6 className="mb-1">JavaScript</h6>
                                </div>
                              </div>
                            </div>
                            <div className="gold-members p-3 border-bottom">
                              <div className="media">
                                <div className="mr-3"><i className="icofont-ui-press text-danger food-item" /></div>
                                <div className="media-body">
                                  <h6 className="mb-1">PHP</h6>
                                </div>
                              </div>
                            </div>
                            <div className="gold-members p-3 border-bottom">
                              <div className="media">
                                <div className="mr-3"><i className="icofont-ui-press text-danger food-item" /></div>
                                <div className="media-body">
                                  <h6 className="mb-1">REST API</h6>
                                </div>
                              </div>
                            </div>
                            <div className="gold-members p-3 border-bottom">
                              <div className="media">
                                <div className="mr-3"><i className="icofont-ui-press text-danger food-item" /></div>
                                <div className="media-body">
                                  <h6 className="mb-1">Node JS</h6>
                                </div>
                              </div>
                            </div>
                            <div className="gold-members p-3">
                              <div className="media">
                                <div className="mr-3"><i className="icofont-ui-press text-success food-item" /></div>
                                <div className="media-body">
                                  <h6 className="mb-1">Phalcon</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-gallery" role="tabpanel" aria-labelledby="pills-gallery-tab">
                      <div id="gallery" className="bg-white rounded shadow-sm p-4 mb-4">
                        <div className="restaurant-slider-main position-relative homepage-great-deals-carousel">
                          <div className="owl-carousel owl-theme homepage-ad">
                            <div className="item">
                              <img className="img-fluid" src="../img/gallery/1.png" />
                            </div>
                            <div className="item">
                              <img className="img-fluid" src="../img/gallery/2.png" />
                            </div>
                            <div className="item">
                              <img className="img-fluid" src="../img/gallery/3.png" />
                            </div>
                            <div className="item">
                              <img className="img-fluid" src="../img/gallery/1.png" />
                            </div>
                            <div className="item">
                              <img className="img-fluid" src="../img/gallery/2.png" />
                            </div>
                            <div className="item">
                              <img className="img-fluid" src="../img/gallery/3.png" />
                            </div>
                          </div>
                          <div className="position-absolute restaurant-slider-pics bg-dark text-white">2 of 14 Photos</div>
                          <div className="position-absolute restaurant-slider-view-all"><button type="button" className="btn btn-light bg-white">See all Photos</button></div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-restaurant-info" role="tabpanel" aria-labelledby="pills-restaurant-info-tab">
                      <div id="restaurant-info" className="bg-white rounded shadow-sm p-4 mb-4">
                        <h5 className="mb-4">Freelance Software and Web Developer (Freelance)at ABC Soft</h5>
                        <p className="mb-3">New Road, Nigeria
                        </p>
                        <ul>
                          <li>Fullstack Software/Web Application Development with React JS, PHP (Codeigniter and Phalcon), Node JS (Express), Bootstrap and Material Design Frameworks, MySQL Database, CSS and HTML</li>
                          <li>Building websites with Wordpress CMS Code deployment to hosting platforms such as Heroku, AWS, CPanel and GCP</li>
                          <li>Building and Consuming of Data with JSON and XML from RESTful Fetch APIs</li>
                          <li>Project Management with Git/Github and Trello</li>
                          
                        </ul>
                        <hr className="clearfix" />
                        <h5 className="mb-4">Freelance Software and Web Developer (Freelance)at ABC Soft</h5>
                        <p className="mb-3">New Road, Nigeria
                        </p>
                        <ul>
                          <li>Fullstack Software/Web Application Development with React JS, PHP (Codeigniter and Phalcon), Node JS (Express), Bootstrap and Material Design Frameworks, MySQL Database, CSS and HTML</li>
                          <li>Building websites with Wordpress CMS Code deployment to hosting platforms such as Heroku, AWS, CPanel and GCP</li>
                          <li>Building and Consuming of Data with JSON and XML from RESTful Fetch APIs</li>
                          <li>Project Management with Git/Github and Trello</li>
                          
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-book" role="tabpanel" aria-labelledby="pills-book-tab">
                    <div id="restaurant-info" className="bg-white rounded shadow-sm p-4 mb-4">
                        <h5 className="mb-4">Bachelor of Degree</h5>
                        <hr className="clearfix" />
                        <p className="mb-3">Computer Science
                        </p>
                        <p className="mb-3">University of Ilorin, Ilorin, Nigeria
                        </p>
                      </div>
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

export default Profile;