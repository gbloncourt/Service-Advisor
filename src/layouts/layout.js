import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "../store/appcontext";
import { Providers } from "../views/providers";

import  Signup from "../views/signup";
import Testmd from "../components/testmd";


import ScrollToTop from "../components/scrolltotop";

import NavbarMain from '../components/navbarmain';

import Home from '../views/home';
// import Home from '../views/signin';
// import Home from '../views/profile';

import { Footer } from '.././components/footer';


export const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<NavbarMain />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
                        {/* <Route path="/signin" component={Signin} />*/}
						<Route path="/providers/:index" component={Providers} />
						<Route path="/signup" component={Signup} />
						<Route path="/testmd/:index" component={Testmd} />
						{/*<Route path="/profile" component={Profile} /> */}
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer /> 
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);