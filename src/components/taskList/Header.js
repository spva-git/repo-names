import React, { Component } from 'react';
import Popup from "reactjs-popup";
import Results from './Results';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}
	
	render() {
		return (
			<nav className={`navbar`}>
				<div className="title">GitRepos</div>
				<Popup trigger={			
					<div>
						<div className="btn card-btn"><i className="card-icon fas fa-code-branch" />View Starred</div>
					</div>                   
					} 
					modal
    				closeOnDocumentClick>
					<div className="modal">
						<div className="header">Starred Repos </div>
						<div className="content">
							{
								this.props.currentTopics.items &&
								<Results currentTopics={  this.props.currentTopics.items.filter(item => localStorage.getItem(item.id) === 'true')} setStorage={this.setStorage} setStorage={this.props.setStorage}/>
							}
						</div>
					</div>
				</Popup>
			</nav>
		);
	}
}
export default Header;
