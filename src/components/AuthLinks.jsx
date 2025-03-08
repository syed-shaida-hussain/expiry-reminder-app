'use client';

import { logoutUser } from '@/features/user/userSlice';
import axios from 'axios';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const AuthLinks = () => {
	const { isUserLoggedIn } = useSelector((store) => store.user);
	console.log(isUserLoggedIn);
	const dispatch = useDispatch();
	const handleLogout = async () => {
		const res = await axios.get('/api/user/logout');
		dispatch(logoutUser());
	};
	return isUserLoggedIn ? (
		<button className="font-semibold text-lg" onClick={() => handleLogout()}>
			Logout
		</button>
	) : (
		<Link href="/login" className="font-semibold text-lg">
			Login
		</Link>
	);
};

export default AuthLinks;
