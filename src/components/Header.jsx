import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { app } from "../firebase";

function Header() {
	const auth = getAuth(app);
	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link
					to={"/"}
					className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
					</svg>
					<span className="ml-3 text-xl">Tailblocks</span>
				</Link>
				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					<Link to={"/login"} className="mr-5 hover:text-gray-900">
						Login
					</Link>
					<Link to={"/signup"} className="mr-5 hover:text-gray-900">
						Create Account
					</Link>
				</nav>
				{/* {onAuthStateChanged(auth, (user) => {
					if (user) {
						// User is signed in, see docs for a list of available properties
						// https://firebase.google.com/docs/reference/js/auth.user
						const uid = user.uid;
						console.log(uid);
						
						// ...
					} else {
						// User is signed out
						// ...
					}
				})} */}
			</div>
		</header>
	);
}

export default Header;
