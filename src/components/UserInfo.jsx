import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserInfo({ logout, userEmail }) {
	return (
		<div className="flex items-center gap-4">
			<FontAwesomeIcon
				icon={faUser}
				className="text-2xl py-2 text-white px-3 rounded bg-amber-500"
			/>
			<h4>{userEmail}</h4>
			<button
				onClick={logout}
				className="text-base border font-medium py-2 text-white px-3 rounded bg-amber-500 hover:text-amber-500 hover:bg-transparent hover:border hover:border-amber-500"
			>
				Log out
			</button>
		</div>
	);
}
