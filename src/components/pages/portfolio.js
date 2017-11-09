import React, { Component } from "react";
import Project from "../projects/project";

class Portfolio extends Component {
	render() {
		return (
			<div className="portfolio container-fluid">

				<h1>Projects</h1>

				<div className="projects container">

					<div className="row">
						<Project title="Spirit Bus" image={require("../../assets/photos/sm-trivia.jpg")}>
						An app detailing the routes and stops of the Spirit Bus public transit line in Monterey Park. The client side elements were designed with Javascript, CSS, Bootstrap and Sass. The map was rendered and traced using Leaflet.js.
						</Project>
						<Project title="Friend Finder" image={require("../../assets/photos/sm-trivia.jpg")}>
						An app detailing the routes and stops of the Spirit Bus public transit line in Monterey Park. The client side elements were designed with Javascript, CSS, Bootstrap and Sass. The map was rendered and traced using Leaflet.js.
						</Project>
						<Project title="React-News" image={require("../../assets/photos/sm-trivia.jpg")}>
						An app detailing the routes and stops of the Spirit Bus public transit line in Monterey Park. The client side elements were designed with Javascript, CSS, Bootstrap and Sass. The map was rendered and traced using Leaflet.js.
						</Project>
					</div>

					<div className="row">
						<Project title="Wølf" image={require("../../assets/photos/sm-trivia.jpg")}>
						An app detailing the routes and stops of the Spirit Bus public transit line in Monterey Park. The client side elements were designed with Javascript, CSS, Bootstrap and Sass. The map was rendered and traced using Leaflet.js.
						</Project>
						<Project title="Flash Card Generator" image={require("../../assets/photos/sm-trivia.jpg")}>
						An app detailing the routes and stops of the Spirit Bus public transit line in Monterey Park. The client side elements were designed with Javascript, CSS, Bootstrap and Sass. The map was rendered and traced using Leaflet.js.
						</Project>
						<Project title="Giftastic" image={require("../../assets/photos/sm-trivia.jpg")}>
						An app detailing the routes and stops of the Spirit Bus public transit line in Monterey Park. The client side elements were designed with Javascript, CSS, Bootstrap and Sass. The map was rendered and traced using Leaflet.js.
						</Project>
					</div>

				</div>

			</div>
		);
	}
}

export default Portfolio;
