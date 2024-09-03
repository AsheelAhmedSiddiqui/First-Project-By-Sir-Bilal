import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const login = (e) => {
		e.preventDefault();
		console.log(userName, password);
	};


	return (
		<>
			<div className="login flex items-center justify-center h-screen">
				<form className="py-12 px-16 border border-slate-600 rounded flex justify-center flex-col gap-4">
					<h1 className="text-3xl font-bold mb-6">Login</h1>
					<div className="email flex flex-col justify-center gap-2 mb-2">
						<label htmlFor="email" className="text-lg font-medium">
							Email
						</label>
						<input
							type="text"
							className="py-2 px-4 border rounded w-80 border-slate-600"
							id="email"
							name="email"
							placeholder="Enter your registered email"
							onChange={(e) => setUserName(e.target.value)}
							required
						/>
					</div>
					<div className="password flex flex-col justify-center gap-2 mb-1">
						<label htmlFor="password" className="text-lg font-medium">
							Password
						</label>
						<input
							type="password"
							className="py-2 px-4 border rounded w-80 border-slate-600"
							id="password"
							name="password"
							placeholder="Enter your registered email"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<p className="text-sm">If you have no account? <Link to={"signup"} className="text-sm text-blue-500 hover:underline hover:text-blue-900 transition-all">Create Account</Link></p>
					<hr className="mb-4 border-slate-300 rounded" />
					<div className="loginBtn flex items-center justify-center">
						<button
							onClick={login}
							className="py-2 px-6 text-lg font-medium rounded-lg bg-teal-300"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;
