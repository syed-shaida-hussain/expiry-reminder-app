'use client';

import Link from 'next/link';

const LoginPage = () => {
	const handleLoginSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="flex items-center justify-center h-[80vh] w-full">
			<form
				name="login-form"
				className="flex flex-col gap-8 sm:gap-4 w-[90%] sm:w-fit shadow-2xl  px-16 py-10 rounded-lg"
				onSubmit={handleLoginSubmit}
			>
				<h1 className="text-5xl text-center">Login</h1>
				<label htmlFor="username" className="flex flex-col gap-2 text-lg">
					Username
					<input
						type="text"
						id="username"
						placeholder="Username..."
						className="input"
					/>
				</label>
				<label htmlFor="password" className="flex flex-col gap-2 text-lg">
					Password
					<input
						type="password"
						id="password"
						placeholder="Password..."
						className="input"
					/>
				</label>
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
