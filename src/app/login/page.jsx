'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/features/user/userSlice';

const LoginPage = () => {
	const [user, setUser] = useState({ username: '', password: '' });
	const [error, setError] = useState({ usernameError: '', passwordError: '' });
	const { username, password } = user;
	const { usernameError, passwordError } = error;
	const router = useRouter();
	const dispatch = useDispatch();

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('/api/user/login', user);
			if (res.status !== 200) {
				setError({
					...error,
					usernameError: res?.data?.errors?.username,
					passwordError: res?.data?.errors?.password,
				});
			}
			if (res?.data?.status === 200) {
				dispatch(loginUser(res?.data?.user));
				router.push('/');
			}
		} catch (error) {
			setError({
				...error,
				usernameError: error?.response?.data?.errors?.username,
				passwordError: error?.response?.data?.errors?.password,
			});
		}
	};

	const handleUserChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};
	return (
		<div className="flex items-center justify-center h-[80vh] w-full p-4 my-8">
			<form
				name="login-form"
				className="flex flex-col gap-4  w-[90%] h-fit sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-fit shadow-2xl px-8 py-4 sm:px-16 sm:py-8 2xl:p-20 2xl:text-2xl  rounded-lg"
				onSubmit={handleLoginSubmit}
				method="POST"
			>
				<h1 className="text-5xl text-center">Login</h1>
				<label htmlFor="username" className="flex flex-col gap-2 text-lg">
					Username
					<input
						type="text"
						id="username"
						placeholder="Username..."
						className="input"
						name="username"
						value={username}
						onChange={handleUserChange}
					/>
				</label>
				<div className="text-red-500">{usernameError}</div>
				<label htmlFor="password" className="flex flex-col gap-2 text-lg">
					Password
					<input
						type="password"
						id="password"
						placeholder="Password..."
						className="input"
						name="password"
						value={password}
						onChange={handleUserChange}
					/>
				</label>
				<div className="text-red-500">{passwordError}</div>
				<button
					type="submit"
					className="w-full bg-background text-textColor px-5 py-2 text-lg font-semibold"
				>
					Login
				</button>
				<Link
					href="/signup"
					className="w-full text-center text-lg underline text-linkColor"
				>
					Not a user? Signup
				</Link>
			</form>
		</div>
	);
};

export default LoginPage;
