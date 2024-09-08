import { Link } from "react-router-dom";

function ProductCards({ data }) {
	// console.log(data);

	return (
		<div className="p-4 md:w-1/3 transition-all">
			<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
				<img
					className="lg:h-48 md:h-36 w-full object-cover object-center"
					src={data.thumbnail}
					alt={data.description}
				/>
				<div className="p-6">
					<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
						{data.category[0].toUpperCase() + data.category.slice(1)}
					</h2>
					<h1 className="title-font text-lg font-medium text-gray-900 mb-3">
						{data.title}
					</h1>
					<p className="leading-relaxed mb-3">
						{data.description.slice(0, 100) + "..."}
					</p>
					<div className="flex items-center flex-wrap ">
						<Link
							to={`/product/${data.id}`}
							className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0"
						>
							Learn More
							<svg
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M5 12h14" />
								<path d="M12 5l7 7-7 7" />
							</svg>
						</Link>
						<span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
							<svg
								className="w-4 h-4 mr-1"
								stroke="currentColor"
								strokeWidth={2}
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								viewBox="0 0 24 24"
							>
								<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
								<circle cx={12} cy={12} r={3} />
							</svg>
							{data.rating}K
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCards;
