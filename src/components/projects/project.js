import React, { Component } from "react";

class Project extends Component {

	render() {
		return (
			<div className="project clearfix col-md-4">
				<a className="title" href={this.props.site}>
					{this.props.title}
				</a>
				<img className="project-image" src={this.props.image} alt="project-image"/>
				<p className="description">
					{this.props.children}
				</p>
			</div>
		);
	}
}

export default Project;
