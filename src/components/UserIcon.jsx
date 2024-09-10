import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserIcon() {
	return (
		<FontAwesomeIcon
			icon={faUser}
			className="text-2xl py-2 text-white px-3 rounded bg-amber-500"
		/>
	);
}

export default UserIcon;
