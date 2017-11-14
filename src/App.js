import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";

// components
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import HomePage from "./components/pages/homePage";
import Portfolio from "./components/pages/portfolio";
import About from "./components/aboutComponent/about";

// includes
import "./assets/css/default.min.css";
import "./assets/js/script.js";


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">

					<Header />

					<HomePage />
					<Portfolio />
					<About />

					{/* <Route exact path="/" component={HomePage}></Route>
					<Route exact path="/#projects" component={Portfolio}></Route> */}

					<Footer />

				</div>
			</Router>
		);
	}
}

export default App;
