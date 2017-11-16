import React, { Component } from "react";


class Header extends Component {
	render() {
		return (
			<header id="home">


				<a className="logo" href="#home">
					<svg id="icon" width="40" height="40">
						<polyline fill="none"  stroke-width="3"
							points=
								"8,4
							 32,4
							 24,12
							 32,16
							 20,36
							 8,16
							 16,12"
						/>
					</svg>
				</a>


				<nav>
					<ul>
						<li className="first">
							<a id="nav-home" href="#home">Home</a>
						</li>
						<li>
							<a id="nav-projects" href="#projects">Projects</a>
						</li>
						<li>
							<a id="nav-about" href="#about">About</a>
						</li>
						<li className="last">
							<a id="nav-contact" href="#contact">Contact</a>
						</li>
					</ul>
				</nav>


			</header>
		);
	}
}

export default Header;
