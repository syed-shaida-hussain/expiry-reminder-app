'use client';

import { logoutUser } from '@/features/user/userSlice';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const AuthLinks = () => {
	const { isUserLoggedIn } = useSelector((store) => store.user);
	const router = useRouter();
	const dispatch = useDispatch();
	const handleLogout = async () => {
		try {
			const res = await axios.get('/api/user/logout');
			dispatch(logoutUser());
			router.push('/login');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="flex flex-col gap-6 items-center md:flex-row">
			{isUserLoggedIn && (
				<Link href="/add-product" className="font-semibold hover:underline">
					Add product
				</Link>
			)}
			<div>
				{isUserLoggedIn ? (
					<button
						className="font-semibold hover:underline"
						onClick={() => handleLogout()}
					>
						Logout
					</button>
				) : (
					<Link href="/login" className="font-semibold hover:underline">
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default AuthLinks;
