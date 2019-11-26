import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to Layout.jsx, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.jsx#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here
			 *
			 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
			 *
			 **/

			const service = fetch(
				"https://8080-e4790fc8-2480-455e-a07f-ee7b3d9e96ff.ws-us02.gitpod.io/wp-json/sample_api/v1/services"
			)
				.then(response => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					// Examine the text in the response
					return response.json();
				})
				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});

			Promise.all([service])
				.then(data => {
					setState({
						...state,
						store: {
							...state.store,
							service: data[0]
							//events: data[1],
							//session: data[2]
						}
					});
				})
				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});
		}, []);

		// the initial value for the context its not null anymore, but the current state of this component,
		// the context will have a getStore and setStore functions available then, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
