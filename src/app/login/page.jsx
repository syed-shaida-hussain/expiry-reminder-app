'use client';

const LoginPage = () => {
	const handleLoginSubmit = (e) => {
		e.preventDefault();
	};
	return <form onSubmit={handleLoginSubmit}></form>;
};

export default LoginPage;
