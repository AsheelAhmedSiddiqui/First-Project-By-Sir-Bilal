function Chips({ title, isChoosen, onClick }) {
	return (
		<div
			onClick={onClick}
			className={`${
				isChoosen ? "bg-yellow-400 text-black" : "bg-white text-black"
			} cursor-pointer hover:bg-yellow-100 inline-block m-2 transition-all p-2 w-fit px-4 border border-purple-200 rounded `}
		>
			<h1>{title[0].toUpperCase() + title.slice(1)}</h1>
		</div>
	);
}

export default Chips;
