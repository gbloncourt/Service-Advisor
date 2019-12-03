import React from "react";
import { Context } from "../store/appContext.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import { ProviderCard } from "../component/providercard.js";

export const Providers = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<Context.Consumer>
						{({ store }) => {
							return store.provider.map((provider, index) => {
								// <Jumbotron className="bg-cover">
								// 	<h1>{store.service[props.match.params.index].acf.serviceTitle}</h1>
								// </Jumbotron>;
								if (provider) {
									return (
										<div className="col-12 col-sm-6 col-lg-4" key={index}>
											<ProviderCard
												index={index}
												providerCompanyName={provider.acf.providercompanyname}
												providerUserName={provider.acf.username}
												providerPhoneNumber={provider.acf.providerphonenumber}
												providerWebsite={provider.acf.providerwebsite}
												providerAvatar={provider.acf.avatar}
												providerRating={provider.acf.providerrating}
												providerUserID={provider.acf.userid}
											/>
										</div>
									);
								} else {
									return <h5>Still Loading...</h5>;
								}
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		</div>
	);
};
