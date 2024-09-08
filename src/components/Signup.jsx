import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { addDoc, app, getFirestore } from "../firebase";
import { collection } from "firebase/firestore";

function Signup() {
	const [userName, setUserName] = useState("");
	const [userEmail, setuserEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const auth = getAuth(app);
	const db = getFirestore(app);

	const goback = () => {
		navigate("/");
	};

	const signup = (e) => {
		e.preventDefault();
		document.getElementById("signUpBtn").disabled = true;
		document.getElementById("signUpBtn").innerText = "loading...";
		console.log(userName, userEmail, password);
		createUserWithEmailAndPassword(auth, userEmail, password)
			.then(async (userCredential) => {
				// Signed up
				const user = userCredential.user;
				console.log(user);
				
				// ...
				try {
					const docRef = await addDoc(collection(db, "users"), {
						name: userName,
						email: userEmail,
						password: password,
					});
					console.log("Document written with ID: ", docRef.id);
				} catch (e) {
					console.error("Error adding document: ", e);
				}
				document.getElementById("signUpBtn").disabled = false;
				document.getElementById("signUpBtn").innerText = "Create Account";
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};

	return (
		<>
			<div className="login flex items-center justify-center h-screen">
				<form className="py-8 px-16 border border-slate-600 rounded flex justify-center flex-col gap-4">
					<h1 className="text-3xl font-bold mb-6">Sign up</h1>
					<div className="username flex flex-col justify-center gap-2 mb-2">
						<label htmlFor="username" className="text-lg font-medium">
							Username
						</label>
						<input
							type="text"
							className="py-2 px-4 border rounded w-80 border-slate-600"
							id="username"
							name="username"
							placeholder="Enter your registered email"
							onChange={(e) => setUserName(e.target.value)}
							required
						/>
					</div>
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
							onChange={(e) => setuserEmail(e.target.value)}
							required
						/>
					</div>
					<div className="password flex flex-col justify-center gap-2 mb-6">
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
					<div className="signup flex items-center justify-center">
						<button
							onClick={signup}
							id="signUpBtn"
							className="py-2 px-6 text-lg font-medium rounded-lg bg-teal-300"
						>
							Create Account
						</button>
					</div>
					<div className="goback flex items-center justify-center">
						<button
							onClick={goback}
							className=" text-lg font-medium rounded-lg text-teal-600"
						>
							Go Back
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Signup;
