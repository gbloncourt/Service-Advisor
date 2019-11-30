import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

import { ProviderCard } from "../component/providercard.js";

export const Providers = props => {
	return (
		<div className="container">
			<Context.Consumer>
				{({ store, actions }) => {
					return <p>{store.service[props.match.params.index].acf.serviceTitle}</p>;
				}}
			</Context.Consumer>
			<div className="row">
				<ProviderCard />
			</div>
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
