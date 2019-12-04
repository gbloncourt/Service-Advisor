import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { Context } from "../store/appContext.js";

import "../../styles/providercard.scss";

export function ProviderCard(props) {
	return (
		<Context.Consumer>
			{({ store }) => {
				return (
					<div className="">
						<div className="card profile-card-3">
							<div className="background-block">
								<img
									src={
										store.service[props.index] &&
										store.service[props.index].acf.serviceBackgroundImg
									}
									// src="http://gbsoftinc.com/wpgb/wp-content/uploads/2019/11/landscape_service.jpg"
									//alt="profile-sample1"
									className="background"
								/>
							</div>
							<div className="profile-thumb-block">
								<img
									src={props.providerAvatar.url}
									//src="http://gbsoftinc.com/wpgb/wp-content/uploads/2019/11/22.jpg"
									alt="profile-image"
									className="profile"
								/>
							</div>
							<div className="card-content">
								<h2>
									{props.providerCompanyName}
									<small>{props.providerUserName}</small>
									<small>{props.providerUserID}</small>
									<small>Phone: {props.providerPhoneNumber}</small>
									<small>Email: </small>
									<small>Website: {props.providerWebsite}</small>
									<small>
										<span className="d-flex align-items-center justify-content-center">
											Rating:
											<StarRatingComponent
												name="rate1"
												editing={false}
												starCount={5}
												value={props.providerRating}
												starColor="#feb400"
											/>
										</span>
									</small>
								</h2>
							</div>
						</div>
					</div>
				);
			}}
		</Context.Consumer>
	);
}

ProviderCard.propTypes = {
	providerCompanyName: PropTypes.string,
	providerUserName: PropTypes.string,
	providerPhoneNumber: PropTypes.string,
	providerWebsite: PropTypes.string,
	providerAvatar: PropTypes.string,
	providerRating: PropTypes.number,
	providerUserID: PropTypes.number,
	index: PropTypes.number
};
