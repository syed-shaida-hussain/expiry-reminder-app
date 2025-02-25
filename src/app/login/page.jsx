'use client';

const LoginPage = () => {
	const handleLoginSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form
			onSubmit={handleLoginSubmit}
			className="flex items-center justify-center h-screen w-full"
		>
			<div className="flex flex-col gap-5 shadow-2xl  px-16 py-10 rounded-lg">
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
					className="w-full bg-black text-white px-5 py-2 text-lg font-semibold"
				>
					Login
				</button>
			</div>
		</form>
	);
};

export default LoginPage;
