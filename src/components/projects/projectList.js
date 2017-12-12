import React from "react";

import Project from "./project";
import Work from "./work";


class ProjectList extends React.Component {
	render() {
		let elements = Work.map((element) => {
			return (
				<div id="#project" className="project" style= {{backgroundImage: "url(" + element.image + ")"}}>
					<a  href={element.site} className="overlay">
						<p className="description">
							{element.children}
						</p>
						<h2 className="title">
							{element.title}
						</h2>
					</a>
				</div>
			);
		});
		return {elements};
	}
}


export default ProjectList;
