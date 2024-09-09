import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";
import UserInfo from "./UserInfo";
import AccountLink from "./AccountLink";

function Header() {
	const navigate = useNavigate();
	const userData = useContext(UserContext);
	const currUser = userData.user;
	console.log(currUser);

	function logout() {
		const auth = getAuth(app);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/login");
			})
			.catch((error) => {
				// An error happened.
				navigate("/");
				alert("error===> ", error);
			});
	}

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
					{!userData.user ? (
						<AccountLink />
					) : (
						<UserInfo logout={logout} userEmail={currUser.data.email} />
					)}
				</nav>
				{/* { 
					!userData.user ? <div>Milgaya</div>:
				} */}
			</div>
		</header>
	);
}

export default Header;
