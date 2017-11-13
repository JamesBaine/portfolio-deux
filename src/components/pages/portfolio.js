import React, { Component } from "react";
import Project from "../projects/project";
import Work from "../projects/work";

class Portfolio extends Component {
	render() {
		return (
			<div className="portfolio container-fluid">

				<h1 className>Projects</h1>

				<div className="projects container">



					<Project title={Work[0].title} site={Work[0].site} image={Work[0].image}>
						{Work[0].description}
					</Project>
					<Project title={Work[1].title} site={Work[1].site} image={Work[1].image}>
						{Work[1].description}
					</Project>
					<Project title={Work[2].title} site={Work[2].site} image={Work[2].image}>
						{Work[2].description}
					</Project>





					<Project title={Work[3].title} site={Work[3].site} image={Work[3].image}>
						{Work[3].description}
					</Project>
					<Project title={Work[4].title} site={Work[4].site} image={Work[4].image}>
						{Work[4].description}
					</Project>
					<Project title={Work[5].title} site={Work[5].site} image={Work[5].image}>
						{Work[5].description}
					</Project>


				</div>

			</div>
		);
	}
}

export default Portfolio;
