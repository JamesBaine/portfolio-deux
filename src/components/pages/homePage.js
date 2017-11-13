import React, { Component } from "react";

class HomePage extends Component {
	render() {
		return (
			<div className="home-content container-fluid">

				<div className="banner">
					<div className="headline">
						<h1 className="name">James Baine</h1>
						<h2 className="title">Web Developer && UI Designer</h2>
						<p className="location">- Los Angeles, CA -</p>
						<a className="email" href="mailto:jamesmbaine@gmail.com">jamesmbaine@gmail.com</a>
					</div>
				</div>

				<a href="" className="arrow"></a>

			</div>
		);
	}
}

export default HomePage;
