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

	const linkClasses =
		'font-semibold transition-colors duration-300 hover:text-accent hover:underline';

	return (
		<header className="flex justify-between md:justify-around items-center flex-wrap px-10 md:px-2 h-20 bg-surfaceColor text-textColor z-50">
			{/* Logo */}
			<Link href="/" className={`${linkClasses} text-lg`}>
				ExpireTrack
			</Link>

			{/* Hamburger for mobile */}
			<button className="inline md:hidden relative" onClick={toggleMenu}>
				{isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
			</button>

			{/* Desktop Nav */}
			<nav className="hidden gap-2 md:gap-6 items-center md:flex">
				<Link href="/products" className={linkClasses}>
					Products
				</Link>
				<Link href="/expiring-soon" className={linkClasses}>
					Expiring soon
				</Link>
				<Link href="/about" className={linkClasses}>
					About
				</Link>
				<AuthLinks />
			</nav>

			{/* Mobile Nav */}
			{isMenuOpen && (
				<nav className="min-h-screen flex flex-col items-center pt-6 text-2xl gap-10 px-10 py-5 min-w-full bg-background absolute top-20 right-0 md:hidden">
					<Link href="/products" className={linkClasses} onClick={toggleMenu}>
						Products
					</Link>
					<Link
						href="/expiring-soon"
						className={linkClasses}
						onClick={toggleMenu}
					>
						Expiring soon
					</Link>
					<Link href="/about" className={linkClasses} onClick={toggleMenu}>
						About
					</Link>
					<AuthLinks />
				</nav>
			)}
		</header>
	);
};

export default Header;
