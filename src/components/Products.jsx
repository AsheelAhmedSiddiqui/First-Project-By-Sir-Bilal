import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ, faArrowUpAZ } from "@fortawesome/free-solid-svg-icons";
import ProductCards from "./ProductsCard";
import Chips from "./Chips";

function Products() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [curr, setCurr] = useState(true);
	const [choosenCate, setChoosenCate] = useState("All");

	useEffect(() => {
		const url =
			choosenCate === "All"
				? "https://dummyjson.com/products"
				: `https://dummyjson.com/products/category/${choosenCate}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setProducts(data.products);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [choosenCate]);

	useEffect(() => {
		fetch("https://dummyjson.com/products/categories")
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);

	function sortingAtoZ() {
		const sortedProducts = [...products].sort((a, b) =>
			a.title.localeCompare(b.title)
		);
		setProducts(sortedProducts);
	}

	function sortingZtoA() {
		const sortedProducts = [...products].sort((a, b) =>
			b.title.localeCompare(a.title)
		);
		setProducts(sortedProducts);
	}

	// console.log(categories);

	return (
		<>
			<div className="container h-screen mx-auto w-3/4 my-10">
				<div className="flex flex-wrap justify-between items-center gap-1">
					<Chips
						isChoosen={choosenCate === "All"}
						title={"All"}
						onClick={() => {
							setChoosenCate("All");
						}}
					/>
					{loading ? (
						<h1 className="text-center text-xl">Loading....</h1>
					) : (
						categories.map((cate) => (
							<Chips
								isChoosen={choosenCate === cate.slug}
								onClick={() => {
									setChoosenCate(cate.slug);
									console.log("click kar liya hai");
								}}
								title={cate.slug}
								key={cate.slug}
							/>
						))
					)}
				</div>
				<div className="sorting my-8 flex items-center gap-4">
					<div
						onClick={sortingAtoZ}
						className={
							"py-2 px-4 border flex items-center gap-2 border-yellow-400 font-medium w-26 text-center rounded  hover:bg-yellow-300 hover:text-white cursor-pointer transition-all"
						}
					>
						A-Z{" "}
						<FontAwesomeIcon
							icon={faArrowUpAZ}
							className="text-gray-400 hover:text-yellow-500"
						/>
					</div>
					<div
						onClick={sortingZtoA}
						className={
							"py-2 px-4 border flex items-center gap-2 border-yellow-400 font-medium w-26 text-center rounded hover:bg-yellow-300 hover:text-white cursor-pointer transition-all"
						}
					>
						Z-A{" "}
						<FontAwesomeIcon
							icon={faArrowDownAZ}
							className="text-gray-400 hover:text-yellow-500"
						/>
					</div>
				</div>
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-10 mx-auto">
						<div className="flex flex-wrap m-4">
							{loading ? (
								<h1 className="text-center text-xl">Loading....</h1>
							) : (
								products.map((data) => (
									<ProductCards data={data} key={data.id} />
								))
							)}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
export default Products;
