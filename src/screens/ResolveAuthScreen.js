import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
	const { signInLocally } = useContext(AuthContext);

	useEffect(() => {
		signInLocally();
	}, []);

	return null;
};

export default ResolveAuthScreen;
