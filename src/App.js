import React, { Component } from "react";


// components
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import HomePage from "./components/pages/homePage";
import Portfolio from "./components/pages/portfolio";
import About from "./components/pages/about";

// includes
import "./assets/css/default.min.css";
import "./assets/js/script.js";


class App extends Component {
	render() {
		return (
			<div className="App">

				<Header />

				<HomePage />
				<Portfolio />
				<About />

		

				<Footer />

			</div>
		);
	}
}

export default App;
