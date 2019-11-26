import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const Providers = props => {
	return (
		<div className="container">
			<Context.Consumer>
				{({ store, actions }) => {
					return <p>{store.service[props.match.params.index].serviceTitle}</p>;
				}}
			</Context.Consumer>
		</div>
	);
};

Providers.propTypes = {
	serviceTitle: PropTypes.string,
	serviceDescription: PropTypes.string,
	serviceID: PropTypes.number,
	serviceBackgroundImg: PropTypes.string,
	match: PropTypes.object
};
