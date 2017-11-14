import React, { Component } from "react";
import {
	Link
} from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<header>


				<a className="logo" href="/#">LOGO</a>


				<nav>
					<ul>
						<li className="first">
							<a id="#nav-home" href="/#">Home</a>
						</li>
						<li>
							<a id="#nav-projects" href="#projects">Projects</a>
						</li>
						<li>
							<a id="#nav-about" href="#about">About</a>
						</li>
						<li className="last">
							<Link to="/">Contact</Link>
						</li>
					</ul>
				</nav>


			</header>
		);
	}
}

export default Header;
