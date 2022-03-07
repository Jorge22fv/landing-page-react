import React from "react";
import Nav from "./navbar.jsx";
import Jumbo from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<div>
			<Nav />
			<Jumbo />
			<div className="row m-3">
				<div className="col-md-3">
					<Card />
				</div>
				<div className="col-md-3">
					<Card />
				</div>
				<div className="col-md-3">
					<Card />
				</div>
				<div className="col-md-3">
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Home;
