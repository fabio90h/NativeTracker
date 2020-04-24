import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
	const { signInLocally } = useContext(AuthContext);

	useEffect(() => {
		let signIn = signInLocally();
		return signIn;
	}, []);

	return null;
};

export default ResolveAuthScreen;
