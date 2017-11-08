import React, { Component } from "react";

class ProjectOne extends Component {
	render() {
		return (
			<div className="project clearfix">
				<h2 className="project-title">Spirit Bus</h2>
				<img className="project-image" src={require("../../assets/photos/sm-trivia.jpg")} alt="project-image"/>
				<p className="description">
          An app detailing the routes and stops of the Spirit Bus public transit line in Monterey Park. The client side elements were designed with Javascript, CSS, Bootstrap and Sass. The map was rendered and traced using Leaflet.js.
				</p>
			</div>
		);
	}
}

export default ProjectOne;
