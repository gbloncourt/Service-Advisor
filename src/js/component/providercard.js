import React from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import "../../styles/providercard.scss";

export const ProviderCard = () => {
	return (
		<Context.Consumer>
			{({ store, actions }) => {
				return store.provider.map((provider, index) => {
					return (
						<div className="col-md-4" key={index}>
							<div className="card profile-card-3">
								index={index}
								<div className="background-block">
									<img
										src="http://gbsoftinc.com/wpgb/wp-content/uploads/2019/11/landscape_service.jpg"
										alt="profile-sample1"
										className="background"
									/>
								</div>
								<div className="profile-thumb-block">
									<img
										src="https://randomuser.me/api/portraits/men/41.jpg"
										alt="profile-image"
										className="profile"
									/>
								</div>
								<div className="card-content">
									<h2>
										{provider.acf.providercompanyname}
										<small>{provider.acf.username}</small>
										<small>Phone: {provider.acf.providerphonenumber}</small>
										<small>Email: </small>
										<small>Website: {provider.acf.providerwebsite}</small>
									</h2>
								</div>
							</div>
						</div>
					);
				});
			}}
		</Context.Consumer>
	);
};
