import React from "react";

const Card = () => {
	return (
		<div className="card">
			<img
				src="https://i.picsum.photos/id/259/500/325.jpg?hmac=2Fli-NSMCKMhHNbTyIWkLpxt6hUePYxfzWB1Q99cWYY"
				className="card-img-top"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This card has supporting text below as a natural lead-in to
					additional content.
				</p>
				<button type="button" class="btn btn-primary">
					Find some more!
				</button>
			</div>
		</div>
	);
};

export default Card;
