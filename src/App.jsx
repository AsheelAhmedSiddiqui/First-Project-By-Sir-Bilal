import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Top from "./components/Top";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";

function App() {
	return (
		<BrowserRouter>
			<Top />
			<Header />
			<Outlet />
			<Routes>
				{/* <Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} /> */}
				<Route path="/" element={<Products />} />
				<Route path="/products">
					<Route index element={<Products />} />
					<Route path=":id" element={<ProductDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
