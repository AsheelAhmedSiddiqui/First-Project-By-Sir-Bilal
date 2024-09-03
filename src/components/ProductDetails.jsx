import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { allproducts } from "../allproducts";

function ProductDetails() {
	const [newProducts, setProducts] = useState(allproducts.products);
	const { title } = useParams();

	console.log(newProducts);

	// useEffect(() => {
	// 	fetchApi();
	// }, []);

	const currProduct = newProducts.find((data) => data.title == title);

	console.log(currProduct);

	// function fetchApi() {
	// 	fetch("https://dummyjson.com/products")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setProducts(data.products);
	// 		});
	// }

	return (
		<div className="productsDetails flex items-center justify-center h-screen">
			<div className="w-3/4 mx-auto grid grid-cols-2 gap-4 border border-black rounded py-6 px-4">
				<div className="image">
					<img
						src={currProduct.images}
						alt={currProduct.description}
						className="w-full"
					/>
				</div>
				<div className="productContent">
					<h2 className="text-3xl font-bold">{currProduct.title}</h2>
					<p className="text-lg">{currProduct.description}</p>
					<h4 className="text-lg">{currProduct.price}</h4>
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
