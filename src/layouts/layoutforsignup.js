import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "../store/appcontext";
import Home from '../views/home';

import  Signup from "../views/signup";
import ScrollToTop from "../components/scrolltotop";
import { Footer } from '.././components/footer';

export const Layoutregister = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
                        {/* <Route path="/signin" component={Signin} />*/}
						
						<Route path="/signup" component={Signup} />
						
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer /> 
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layoutregister);