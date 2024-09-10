function UserImg({ image }) {
    console.log(image);
    
	return (
		<div className="user-img">
			<img src={image} alt="User Image" className="w-14 rounded-full" />
		</div>
	);
}

export default UserImg;
