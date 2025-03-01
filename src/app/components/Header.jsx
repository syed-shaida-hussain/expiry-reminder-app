'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen((open) => !open);
	};

	const toggleTheme = () => {
		setIsDark((dark) => !dark);
	};
	return (
		<header className="flex justify-between md:justify-around items-center flex-wrap px-10 h-20 bg-background text-textColor sticky top-0 mb-6">
			<Link href="/" className="font-semibold text-lg ">
				ExpireTrack
			</Link>
			<button className="inline md:hidden relative" onClick={toggleMenu}>
				{isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
			</button>
			<nav className="hidden gap-2 sm:gap-6 items-center md:flex">
				<Link href="/" className="font-semibold text-lg ">
					Expiring soon
				</Link>
				<Link href="/" className="font-semibold text-lg ">
					Low stock
				</Link>
				<Link href="/" className="font-semibold text-lg ">
					Out of stock
				</Link>
				<Link href="/" className="font-semibold text-lg ">
					Expired items
				</Link>
				<button onClick={toggleTheme}>
					{isDark ? (
						<MdLightMode className="w-7 h-7" />
					) : (
						<MdDarkMode className="w-7 h-7" />
					)}
				</button>
			</nav>
			{isMenuOpen && (
				<nav className="min-h-screen flex flex-col items-center gap-20 px-10 py-5 min-w-full bg-background absolute top-20 right-0 md:hidden">
					<Link href="/" className="font-semibold text-lg ">
						Expiring soon
					</Link>
					<Link href="/" className="font-semibold text-lg ">
						Low stock
					</Link>
					<Link href="/" className="font-semibold text-lg ">
						Out of stock
					</Link>
					<Link href="/" className="font-semibold text-lg ">
						Expired items
					</Link>
					<button onClick={toggleTheme}>
						{isDark ? (
							<MdLightMode className="w-7 h-7" />
						) : (
							<MdDarkMode className="w-7 h-7" />
						)}
					</button>
				</nav>
			)}
		</header>
	);
};

export default Header;
