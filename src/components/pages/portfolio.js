import React, { Component } from "react";
import ProjectOne from "../projects/projectOne";

class Portfolio extends Component {
	render() {
		return (
			<div className="portfolio container-fluid">

				<h1>Portfolio</h1>

				<div className="projects container">
					<ProjectOne />
					<ProjectOne />
					<ProjectOne />
					<ProjectOne />
					<ProjectOne />
					<ProjectOne />
				</div>

			</div>
		);
	}
}

export default Portfolio;
