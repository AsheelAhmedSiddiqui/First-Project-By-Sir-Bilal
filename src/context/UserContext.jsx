import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase";

export const UserContext = createContext("");

function UserContextProvider({ children }) {
	const [user, setUser] = useState({
		isLogin: false,
		data: {},
	});

	useEffect(() => {
		const auth = getAuth(app);
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				// console.log(user);
				// console.log(user)
				const uid = user.uid;
				setUser({
					isLogin: true,
					data: {
						uid: user.uid,
						email: user.email,
					},
				});
				// ...
			} else {
				// User is signed out
				// ...
				setUser({
					isLogin: false,
					data: {},
				});
			}
		});
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
