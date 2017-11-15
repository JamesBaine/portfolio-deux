import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<footer id="contact">

				<p className="connect">Connect with me</p>

				<ul>
					<li className="first">
						<a href="mailto:jamesmbaine@gmail.com"><img className="email-icon" src={require("../../assets/photos/gmail-grey.png")} alt=""/></a>
					</li>
					<li>
						<a href="mailto:jamesmbaine@gmail.com"><img className="github-icon" src={require("../../assets/photos/git-grey.png")} alt="github"/></a>
					</li>
					<li>
						<a href="mailto:jamesmbaine@gmail.com"><img className="linkedin-icon" src={require("../../assets/photos/link-grey.png")} alt="linkedin"/></a>
					</li>
					<li>
						<a href="mailto:jamesmbaine@gmail.com"><img className="instagram-icon" src={require("../../assets/photos/insta-grey.png")} alt="instagram"/></a>
					</li>
				</ul>

			</footer>
		);
	}
}

export default Footer;
