import React from 'react';
import loadjs from 'loadjs';
import { Link } from 'react-router-dom';

class Api extends React.Component {
	constructor(props) {
    super(props);
/*    this.state = {id: '', name: '', state_capital: '', slogan: '', population: '', zip: '', official_website: '', date_created: '', logo: '', description: '', governor_id: '', governor: '', deputy: '', image: '', zone: '', lgas: []};
		this.headers = [
			{ key: 'id', label: 'Id'},
			{ key: 'name', label: 'Name' },
		];*/

  }
  
componentWillMount(){
  const jqscript = document.createElement("script");
  jqscript.src = "/js/jquery.min.js";
  const pscript = document.createElement("script");
  pscript.src = "/js/slides.min.1.js";
  const jlscript = document.createElement("script");
  jlscript.src = "/jsmaps/jsmaps-libs.js";
  const jmscript = document.createElement("script");
  jmscript.src = "/jsmaps/jsmaps.js";
  const jnscript = document.createElement("script");
  jnscript.src = "/maps/nigeria.js";
  const nscript = document.createElement("script");
  nscript.src = "/js/map.js";
  const panscript = document.createElement("script");
  panscript.src = "/jsmpas/jsmaps-panzoom.js";

  document.body.appendChild(jqscript);
  document.body.appendChild(jlscript);
  document.body.appendChild(jmscript);
  document.body.appendChild(jnscript);
  document.body.appendChild(pscript);
  document.body.appendChild(panscript);
  document.body.appendChild(nscript);

}


componentDidMount(){
  const jqscript = document.createElement("script");
  jqscript.src = "/js/jquery.min.js";
  const pscript = document.createElement("script");
  pscript.src = "/js/slides.min.1.js";
  const jlscript = document.createElement("script");
  jlscript.src = "/jsmaps/jsmaps-libs.js";
  const jmscript = document.createElement("script");
  jmscript.src = "/jsmaps/jsmaps.js";
  const jnscript = document.createElement("script");
  jnscript.src = "/maps/nigeria.js";
  const nscript = document.createElement("script");
  nscript.src = "/js/map.js";
  const panscript = document.createElement("script");
  panscript.src = "/jsmpas/jsmaps-panzoom.js";

  document.body.appendChild(jqscript);
  document.body.appendChild(jlscript);
  document.body.appendChild(jmscript);
  document.body.appendChild(pscript);
  document.body.appendChild(panscript);
  document.body.appendChild(jnscript);
  document.body.appendChild(nscript);

/*  fetch('http://localhost/knownigeria/api/v1/states/'+ this.props.match.params.name)
   .then(response => {
     return response.json();
   }).then(result => {
//     console.log(result);
     this.setState({
       id: result.id,
       name: result.name,
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
   
   fetch('http://127.0.0.1/knownigeria/api/v1/states/'+ this.props.match.params.name +'/governor')
   .then(response => {
     return response.json();
   }).then(result => {
//     console.log(result);
     this.setState({
       governor: result.name,
       image: result.image,
       deputy: result.deputy
     });
   });

   fetch('http://127.0.0.1/knownigeria/api/v1/state/'+ this.props.match.params.name +'/lgas')
   .then(response => {
     return response.json();
   }).then(result => {
//     console.log(result);
     this.setState({
       lgas: result,
     });
   });*/


 
 }
 

 render() {
		return (
                    
            <div>
            <div>
              <div className="panel top">
                <div className="sections desktop">
                  <div className="left"><a href="#" title="Slides Framework"><svg style={{width: '82px', height: '24px'}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#logo" /></svg></a></div>
                  <div className="center">
                    <ul className="menu">
                    <li><Link to="../">Home</Link></li>
                      <li><Link to="..api">Get API</Link></li>
                      <li><Link to="../about">About</Link></li>
                      <li><Link to="../api/documentation">API Documentation</Link></li>
                      <li><Link to="../contact">Contact</Link></li>
                    </ul>
                  </div>
                  <div className="right"><a className="button blue gradient" href="#">Profile</a><a className="button green gradient" href="https://freehtml5.co/slides" target="_blank">Get App</a></div>
                </div>
                <div className="sections compact hidden">
                  <div className="left"><a href="#" title="KnowNigeria Framework"><svg style={{width: '82px', height: '24px'}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#logo" /></svg></a></div>
                  <div className="right"><span className="button actionButton sidebarTrigger" data-sidebar-id={1}><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu" /></svg></span></div>
                </div>
              </div>
            </div>
            <div>
              <div className="sidebar" data-sidebar-id={1}>
                <div className="close"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg></div>
                <div className="content">
                  <a href="#" className="logo"><svg width={37} height={30}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#logo-icon" /></svg></a>
                  <ul className="mainMenu margin-top-3">
                      <li><a href="#">Home</a></li>
                      <li><a href="#videos">Get API</a></li>
                      <li><a href="#features">About</a></li>
                      <li><a href="#case">API Documentation</a></li>
                      <li><a href="#pricing">Contact</a></li>
                  </ul>
                  <ul className="social opacity-8">
                    <li><a href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#facebook" /></svg></a></li>
                    <li><a href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#twitter" /></svg></a></li>
                    <li><a href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#instagram" /></svg></a></li>
                  </ul>
                </div>
              </div>
            </div>   
        <section className="slide fade-6 kenBurns">
                <div className="content">
                <div className="container">
                    <div className="wrap">
                    <div className="fix-12-12">
          <ul className="flex reverse verticalCenter" style={{background: '#ffffff', color: 'green'}}>
            <li className="col-12-12 left cell-26">
            <Link to="/"><span className="fa fa-arrow-left" style={{color: 'green', fontSize: '30px', marginBottom: '1em'}}></span></Link>
              <h3 className="ae-1"> KnowNigeria API</h3>
              <div className="ae-2 center fromLeft">
                  <h3>Introduction</h3>
                    <p className="opacity-8" style={{fontSize: '13px', textAlign: 'justify', marginBottom: '5px'}}>Know Nigeria is a platfrom that provides you with necessary information about all 36 Nigerian States. This page contains the official documentation for the KnowNigeria API.</p> <br/>

                    <h3>States</h3>

                    <p className="opacity-8" style={{fontSize: '13px', textAlign: 'justify', marginBottom: '5px'}}>To fetch data for all states at once,</p>
                    <code>
                        url: http://knownigeria.com/api/v1/states, <br/>
                        method: GET
                    </code>
                    <br/>

                    <p className="opacity-8" style={{fontSize: '13px', textAlign: 'justify', marginBottom: '5px'}}>
                    To fetch data for Individual States,
                    </p>

                    <code>
                            url: http://knownigeria.com/api/v1/states/<i>state_id</i><br/>
                            <i>OR</i><br/>
                            url: http://knownigeria.com/api/v1/states/<i>state_code</i><br/>
                            method: GET<br/>
                        </code>

                    <br/>
                    e.g <code>http://knownigeria.com/api/v1/states/3</code> <p className="opacity-8" style={{fontSize: '13px', textAlign: 'justify', marginBottom: '5px'}}> will fetch the information about Akwa-Ibom State</p>

<br/><br/>


                    <h3>Local Governments</h3>
                    <p className="opacity-8" style={{fontSize: '13px', textAlign: 'justify', marginBottom: '5px'}}>
                        To fetch data for all Local Governements in Nigeria,
                    </p>

                        <code>
                            url: http://knownigeria.com/api/v1/lgas, <br/>
                            method: GET
                        </code>
                        <br/>



                    <p className="opacity-8" style={{fontSize: '13px', textAlign: 'justify', marginBottom: '5px'}}>
                    To fetch data for all Local Governements in a State,
                    </p>

                        <code>
                            url: http://knownigeria.com/api/v1/state/<i>state_id</i>/lgas, <br/>
                            method: GET
                        </code><br/>

                        e.g. <code>http://knownigeria.com/api/v1/state/24/lgas</code> <br/>
                        <p className="opacity-8" style={{fontSize: '13px', textAlign: 'justify', marginBottom: '5px'}}>
                        will return all LGAs for Lagos State</p><br/>


                    <p className="opacity-8" style={{fontSize: '13px', textAlign: 'justify', marginBottom: '5px'}}>
                    To fetch data for a specific Local Governement in Nigeria,
                    </p>

                        <code>
                            url: http://knownigeria.com/api/v1/lgas/<i>state_id</i>, <br/>
                            method: GET
                        </code>



                    <br/><br/><br/>
                    <h3>Governors</h3>

                    <p className="opacity-8" style={{fontSize: '13px', textAlign: 'justify', marginBottom: '5px'}}>
                        To fetch data for a Governor Details in Nigeria,
                    </p>

                        <code>
                            url: http://knownigeria.com/api/v1/state/<i>state_id</i>/governor, <br/>
                            method: GET
                        </code> <br/>

                        <code>e.g. http://knownigeria.com/api/v1/state/10/governor</code> <br/>
                        <p className="opacity-8" style={{fontSize: '13px', textAlign: 'justify', marginBottom: '5px'}}>
                        will return all data  for the governor of Delta State</p>




              </div>
            </li>
            </ul>
        </div>
                    </div>
                </div>
                </div>
            <div className="background" style={{backgroundImage: 'url(/img/background/1.jpg)'}} />
        </section>
            <nav className="panel bottom">
              <div className="sections desktop">
                <div className="left"><a href="#" className="opacity-8">Developed by </a><a href="https://freehtml5.co" style={{color: 'green'}} target="_blank">Juchrist</a></div>
                <div className="right"><span className="nextSlide"><a href="#" className="button hollow ae-5"><img src="img/appstore.jpg" height={63} /></a><a href="#" className="button hollow ae-6"><img src="img/googleplay.jpg" height={63} /></a></span></div>
                <div className="right"><span data-dropdown-id={2} className="button actionButton dropdownTrigger"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#share" /></svg></span></div>
              </div>
              <div className="sections compact hidden">
                <div className="right">
                  <span data-dropdown-id={2} className="button actionButton dropdownTrigger"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#share" /></svg></span>
                </div>
              </div>
            </nav>
            <div className="dropdown share bottom right" data-dropdown-id={2} data-text="Take a look at this" data-url="https://freehtml5.co" data-pinterest-image="https://designmodo.com/wp-content/uploads/2015/10/Presentation.jpg">
              <div className="center padding-2">
                <div className="title">Share</div>
                <a href="#">Contact us</a>
              </div>
              <ul>
                <li className="social-facebook"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#fb-like" /></svg></li>
                <li className="social-twitter"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#twitter" /></svg></li>
                <li className="social-googlePlus"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#googlePlus" /></svg></li>
                <li className="social-linkedin"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#linkedin" /></svg></li>
                <li className="mail" data-subject="Subject" data-body="Body">share by email</li>
              </ul>
            </div>
            <div className="progress-bar blue" />
          </div>            
        
		)
	}
}

export default Api;