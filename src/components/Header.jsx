'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import dynamic from 'next/dynamic';

const AuthLinks = dynamic(() => import('../components/AuthLinks'), {
	ssr: false,
});

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen((open) => !open);
	};

	return (
		<header className="flex justify-between md:justify-around items-center flex-wrap px-10 md:px-2 h-20 bg-background text-textColor sticky top-0 mb-6">
			<Link href="/" className="font-semibold text-lg ">
				ExpireTrack
			</Link>
			<button className="inline md:hidden relative" onClick={toggleMenu}>
				{isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
			</button>
			<nav className="hidden gap-2 sm:gap-6 items-center md:flex">
				<Link href="/expiring-soon" className="font-semibold text-lg ">
					Expiring soon
				</Link>
				<Link href="/low-stock" className="font-semibold text-lg ">
					Low stock
				</Link>
				<Link href="/out-of-stock" className="font-semibold text-lg ">
					Out of stock
				</Link>
				<AuthLinks />
			</nav>
			{isMenuOpen && (
				<nav className="min-h-screen flex flex-col items-center gap-10 px-10 py-5 min-w-full bg-background absolute top-20 right-0 md:hidden">
					<Link
						href="/expiring-soon"
						className="font-semibold text-lg "
						onClick={toggleMenu}
					>
						Expiring soon
					</Link>
					<Link
						href="/low-stock"
						className="font-semibold text-lg "
						onClick={toggleMenu}
					>
						Low stock
					</Link>
					<Link
						href="/out-of-stock"
						className="font-semibold text-lg "
						onClick={toggleMenu}
					>
						Out of stock
					</Link>
					<AuthLinks />
				</nav>
			)}
		</header>
	);
};

export default Header;
