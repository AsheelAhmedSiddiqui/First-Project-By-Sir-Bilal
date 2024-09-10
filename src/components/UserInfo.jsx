import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserImg from "./UserImg";
import UserIcon from "./UserIcon";

export default function UserInfo({ logout }) {
	const { user } = useContext(UserContext);
	console.log(user);

	return (
		<div className="flex items-center gap-4">
			{user.data.photo ? <UserImg image={user.data.photo} /> : <UserIcon />}
			{user.data.displayName ? (
				<h4>{user.data.displayName}</h4>
			) : (
				<h4>{user.data.email}</h4>
			)}

			<button
				onClick={logout}
				className="text-base border font-medium py-2 text-white px-3 rounded bg-amber-500 hover:text-amber-500 hover:bg-transparent hover:border hover:border-amber-500"
			>
				Log out
			</button>
		</div>
	);
}
