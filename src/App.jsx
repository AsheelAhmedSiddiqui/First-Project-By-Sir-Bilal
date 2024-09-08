import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
	useLocation,
} from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Top from "./components/Top";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";

function App() {
	// const location = useLocation();
	// const hideHeaderFooter =
	// 	location.pathname === "/login" || location.pathname === "/signup";
	return (
		<BrowserRouter>
			<Top />
			<Outlet />
			<Header />
			<Routes>
				{/* <Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} /> */}
				<Route path="/" element={<Products />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/product">
					<Route index element={<Products />} />
					<Route path=":id" element={<ProductDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
