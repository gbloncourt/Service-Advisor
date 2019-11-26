import React from "react";
import { Context } from "../store/appContext.js";
import { ServiceCard } from "../component/servicecard.js";
import { JumbotronClientReviews } from "../component/jumbotronclientreviews";

export const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.service.map((service, index) => {
							if (service) {
								return (
									<div className="col-12 col-sm-6 col-lg-4 all-service-card" key={index}>
										<ServiceCard
											index={index}
											serviceID={service.acf.serviceID}
											serviceBackgroundImg={service.acf.serviceBackgroundImg}
											serviceTitle={service.acf.serviceTitle}
											serviceDescription={service.acf.serviceDescription}
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
			<div className="conteiner">{/*<JumbotronClientReviews />*/}</div>
		</div>
	);
};
