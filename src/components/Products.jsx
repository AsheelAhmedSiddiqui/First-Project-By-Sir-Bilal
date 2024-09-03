import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		fetchApi();
	}, []);

	useEffect(() => {
		let filtered = products;
		if (selectedCategory) {
			filtered = filtered.filter(
				(product) => product.category === selectedCategory
			);
		}
		if (maxPrice) {
			filtered = filtered.filter((product) => product.price <= maxPrice);
		}
		setFilteredProducts(filtered);
	}, [selectedCategory, maxPrice, products]);

	function fetchApi() {
		fetch("https://dummyjson.com/products")
			.then((response) => response.json())
			.then((data) => {
				setProducts(data.products);
				const allCategory = data.products.map((all) => all.category);
				const filteredCategory = [...new Set(allCategory)];
				setCategory(filteredCategory);
			});
	}

	const handleCategoryChange = (e) => {
		setSelectedCategory(e.target.value);
	};

	const handlePriceChange = (e) => {
		setMaxPrice(e.target.value);
	};

	return (
		<>
			<div className="container h-screen mx-auto w-3/4 my-10">
				<h1 className="text-4xl text-center font-bold text-amber-600">
					Search Products
				</h1>
				<div className="price-category flex items-center w-2/4 mx-auto my-6 justify-between">
					<div className="price">
						<input
							type="number"
							className="p-2 rounded border border-amber-600"
							placeholder="Enter Price"
							value={maxPrice}
							onChange={handlePriceChange}
						/>
					</div>
					<div className="category">
						<select
							className="py-2 px-4 border border-amber-600 rounded font-medium"
							value={selectedCategory}
							onChange={handleCategoryChange}
						>
							<option value="">All Categories</option>
							{category.map((cat, index) => (
								<option value={cat} key={index}>
									{cat[0].toUpperCase() + cat.slice(1)}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="product-cards grid grid-cols-3 gap-4 mx-auto items-center">
					{filteredProducts.map((all) => (
						<ProductCards
							category={all.category}
							key={all.id}
							thumbnail={all.thumbnail}
							description={all.description}
							price={all.price}
							title={all.title}
							id={all.id}
							isHighlighted={maxPrice && all.price <= maxPrice}
						/>
					))}
				</div>
			</div>
		</>
	);
}

function ProductCards(props) {
	return (
		<div className="product border p-6 h-full relative rounded" id={props.id}>
			<div className="productImage text-center mx-auto ">
				<img src={props.thumbnail} className="w-full" />
			</div>
			<div className="productDetails">
				<h2 className="text-2xl font-bold my-3">{props.title}</h2>
				<p className="text-sm my-4">
					{props.description.slice(0, 120) + "..."}
				</p>
				<p
					className={`text-lg font-bold flex items-baseline mb-2 jus ${
						props.isHighlighted ? "bg-yellow-200" : ""
					}`}
				>
					Price:{" "}
					<span
						className={`font-bold text-2xl ml-2 mr-0.5 ${
							props.isHighlighted ? "text-red-500" : "text-amber-500"
						}`}
					>
						$
					</span>
					{props.price}
				</p>
				<Link
					to={`/products/${props.title}`}
					className=" py-2 px-4 bg-amber-500 hover:bg-amber-200 rounded"
				>
					View
				</Link>
			</div>
			<span className="py-2 px-4 bg-amber-500 font-extrabold rounded text-xs uppercase absolute top-4 right-2">
				{props.category}
			</span>
		</div>
	);
}

export default Products;
