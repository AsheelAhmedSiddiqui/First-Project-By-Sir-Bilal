import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Top from "./components/Top";
import ProductDetails from "./components/ProductDetails";

function App() {
	return (
		<BrowserRouter>
			<Top />
			<Outlet />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/products">
					<Route index element={<Products />} />
					<Route path=":title" element={<ProductDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
