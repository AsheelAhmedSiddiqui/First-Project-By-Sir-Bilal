import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const auth = getAuth(app);

	const login = (e) => {
		e.preventDefault();

		document.getElementById("loginBtn").disabled = true;
		document.getElementById("loginBtn").innerText = "loading...";

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				document.getElementById("loginBtn").innerText = "login";
				document.getElementById("loginBtn").disabled = false;
				const user = userCredential.user;
				navigate("/");
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				document.getElementById("loginBtn").innerText = "login";
				document.getElementById("loginBtn").disabled = false;
				alert("error===> " + errorCode);
			});
	};

	const hanldeSignInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...
				navigate("/");
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				alert("error====>" + errorCode);
				// ...
			});
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
							onChange={(e) => setEmail(e.target.value)}
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
							placeholder="Enter your password"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<p className="text-sm">
						If you have no account?{" "}
						<Link
							to={"/signup"}
							className="text-sm text-blue-500 hover:underline hover:text-blue-900 transition-all"
						>
							Create Account
						</Link>
					</p>
					<hr className="mb-4 border-slate-300 rounded" />
					<div className="loginBtn flex items-center justify-center">
						<button
							onClick={login}
							id="loginBtn"
							className="py-2 px-6 text-lg font-medium rounded-lg bg-teal-300"
						>
							Login
						</button>
					</div>
					<div className="flex items-center justify-center">
						<button
							onClick={hanldeSignInWithGoogle}
							className="flex items-center bg-white dark:bg-teal-300 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-black dark:text-black hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
						>
							<svg
								className="h-6 w-6 mr-2"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								width="800px"
								height="800px"
								viewBox="-0.5 0 48 48"
								version="1.1"
							>
								{" "}
								<title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
								<defs> </defs>{" "}
								<g
									id="Icons"
									stroke="none"
									strokeWidth={1}
									fill="none"
									fillRule="evenodd"
								>
									{" "}
									<g
										id="Color-"
										transform="translate(-401.000000, -860.000000)"
									>
										{" "}
										<g
											id="Google"
											transform="translate(401.000000, 860.000000)"
										>
											{" "}
											<path
												d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
												id="Fill-1"
												fill="#FBBC05"
											>
												{" "}
											</path>{" "}
											<path
												d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
												id="Fill-2"
												fill="#EB4335"
											>
												{" "}
											</path>{" "}
											<path
												d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
												id="Fill-3"
												fill="#34A853"
											>
												{" "}
											</path>{" "}
											<path
												d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
												id="Fill-4"
												fill="#4285F4"
											>
												{" "}
											</path>{" "}
										</g>{" "}
									</g>{" "}
								</g>{" "}
							</svg>
							<span>Continue with Google</span>
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;
