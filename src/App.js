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

// includes
import "./assets/css/default.min.css";


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">

					<Header />

					<HomePage />
					<Portfolio />

					{/* <Route exact path="/" component={HomePage}></Route>
					<Route exact path="/portfolio" component={Portfolio}></Route> */}

					<Footer />

				</div>
			</Router>
		);
	}
}

export default App;
