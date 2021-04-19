import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
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
	
/*	componentDidMount() {
		fetch('http://127.0.0.1/ci_react/index.php/websiterestcontroller/websites')
			.then(response => {
				return response.json();
			}).then(result => {
				console.log(result);
				this.setState({
					websites:result
				});
			});
	}
	
	deleteWebsite(id) {
		if(window.confirm("Are you sure want to delete?")) {
			fetch('http://127.0.0.1/ci_react/index.php/websiterestcontroller/delete_website/' + id, {
                                method : 'DELETE'
                                   }).then(response => { 
					if(response.status === 200) {
						alert("Website deleted successfully");
                                                fetch('http://127.0.0.1/ci_react/index.php/websiterestcontroller/websites')
						.then(response => {
							return response.json();
						}).then(result => {
							console.log(result);
							this.setState({
								websites:result
							});
						});
					} 
			 });
		}
	}*/
	
	render() {
		return (
                    

                        <div class="site-wrapper" style={{backgroundImage:"url('/img/Justice.jpg')", width:'100', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:'100%', position:'fixed'}}>

                            <div class="site-wrapper-inner">

                                <div class="cover-container">
                                    <div class="masthead clearfix">
                                    </div>
                                    <div class="inner cover">
                                        <h1 style={{fontFamily: 'Monotype Corsiva', fontSize:'60px'}}>Welcome to the NI-JUST System</h1>
                                        <p align="center">
                                            <Link to="/instructions" style={{width:'300px'}} class="btn btn-success btn-block" type="submit"><span class="fa fa-chevron-right"></span> Continue to Instructions</Link>
                                        </p>


                                        <div class="mastfoot">
                                            <p class="" align="center" style={{color:"#fff"}}>
                                                    Copyright &copy; 2018, A development of a Speech-To-Text System for the Nigerian Judiciary - A Project work of Ore Juwon Christopher (14/52HA106). All rights reserved.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>                    

		)
	}
}

export default Welcome;