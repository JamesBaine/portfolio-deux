import React, { Component } from "react";
import Project from "../projects/project";
import Work from "../projects/work";

class Portfolio extends Component {
	render() {
		return (
			<div className="portfolio container-fluid">

				<h1>Projects</h1>

				<div className="projects container">

					<div className="row">

						<Project title={Work[0].title} image={Work[0].image}>
							{Work[0].description}
						</Project>
						<Project title={Work[1].title} image={Work[1].image}>
							{Work[1].description}
						</Project>
						<Project title={Work[2].title} image={Work[2].image}>
							{Work[2].description}
						</Project>

					</div>

					<div className="row">

						<Project title={Work[3].title} image={Work[3].image}>
							{Work[3].description}
						</Project>
						<Project title={Work[4].title} image={Work[4].image}>
							{Work[4].description}
						</Project>
						<Project title={Work[5].title} image={Work[5].image}>
							{Work[5].description}
						</Project>

					</div>

				</div>

			</div>
		);
	}
}

export default Portfolio;
