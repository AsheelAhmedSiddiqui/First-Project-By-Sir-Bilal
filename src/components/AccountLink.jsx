import { Link } from "react-router-dom";

export default function AccountLink() {
	return (
		<>
			<Link to={"/login"} className="mr-5 hover:text-gray-900">
				Login
			</Link>
			<Link to={"/signup"} className="mr-5 hover:text-gray-900">
				Create Account
			</Link>
		</>
	);
}
