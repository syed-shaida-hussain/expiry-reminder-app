'use client';

import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
	const [user, setUser] = useState({ username: '', password: '' });
	const [error, setError] = useState({ usernameError: '', passwordError: '' });
	const { username, password } = user;
	const { usernameError, passwordError } = error;
	const router = useRouter();

	const handleSignupSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('/api/user/signup', user);
			if (res.status !== 201) {
				setError({
					...error,
					usernameError: res?.data?.errors?.username,
					passwordError: res?.data?.errors?.password,
				});
			}
			if (res?.data?.status === 201) {
				router.push('/login');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleUserChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	return (
		<div className="flex items-center justify-center h-[90vh] w-full p-4 my-8 ">
			<form
				name="signup-form"
				className="flex flex-col gap-6  w-[90%] h-fit sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-fit shadow-2xl px-8 py-4 sm:px-16 sm:py-8 2xl:p-20 2xl:text-2xl  rounded-lg"
				onSubmit={handleSignupSubmit}
				method="POST"
			>
				<h1 className="text-5xl text-center">Signup</h1>
				<label htmlFor="username" className="flex flex-col gap-2 text-lg">
					Username
					<input
						name="username"
						type="text"
						id="username"
						placeholder="Username..."
						className="input"
						value={username}
						onChange={(e) => handleUserChange(e)}
					/>
				</label>
				<div className="text-red-500">{usernameError}</div>
				<label htmlFor="password" className="flex flex-col gap-2 text-lg">
					Password
					<input
						name="password"
						type="password"
						id="password"
						placeholder="Password..."
						className="input"
						value={password}
						onChange={handleUserChange}
					/>
				</label>
				<div className="text-red-500">{passwordError}</div>
				<button
					type="submit"
					className="w-full bg-background text-textColor px-5 py-2 text-lg font-semibold"
				>
					Signup
				</button>
				<Link
					href="/login"
					className="w-full text-center text-lg underline text-linkColor"
				>
					Already a user? Login
				</Link>
			</form>
		</div>
	);
};

export default SignupPage;
