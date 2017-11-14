import React, { Component } from "react";


class Project extends Component {

	render() {
		return (
			<div id="#project" className="project" style= {{backgroundImage: "url(" + this.props.image + ")"}}>
				<a  href={this.props.site} className="overlay">
					<p className="description">
						{this.props.children}
					</p>
					<h2 className="title">
						{this.props.title}
					</h2>
				</a>
			</div>
		);
	}

}

export default Project;
