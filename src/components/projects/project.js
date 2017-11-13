import React, { Component } from "react";



class Project extends Component {

	render() {
		return (
			<div className="project" style= {{backgroundImage: "url(" + this.props.image + ")"}}>
				<div className="overlay">
					<p className="description">
						{this.props.children}
					</p>
					<a className="title" href={this.props.site}>
						{this.props.title}
					</a>
				</div>
			</div>
		);
	}

}

export default Project;
