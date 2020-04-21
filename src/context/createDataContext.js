import React, { useReducer } from "react";

export default (reducer, actions, initialValues) => {
	// Create Context
	const Context = React.createContext();

	// Create Provider
	const Provider = ({ children }) => {
		// Reducer
		const [state, dispatch] = useReducer(reducer, initialValues);

		//Create Actions
		const boundActions = {};
		for (let key of actions) {
			boundActions[key] = actions[key](dispatch);
		}

		return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
	};

	return { Provider, Context };
};
