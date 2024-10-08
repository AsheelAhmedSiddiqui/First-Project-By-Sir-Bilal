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
import UserContextProvider from "./context/UserContext";

function App() {
	// const location = useLocation();
	// const hideHeaderFooter =
	// 	location.pathname === "/login" || location.pathname === "/signup";
	return (
		<UserContextProvider>
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
		</UserContextProvider>
	);
}

export default App;
