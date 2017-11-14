import React, { Component } from "react";
import Project from "../projects/project";
import Work from "../projects/work";
import Skills from "../skillsComponent/skills";


class Portfolio extends Component {
	render() {
		return (
			<section id="projects" className="portfolio">



				<div className="projects">

					<h1>Projects</h1>

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

					<Skills />


				</div>

			</section>
		);
	}
}

export default Portfolio;
