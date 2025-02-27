const Header = () => {
	return (
		<header className="flex justify-between sm:justify-center items-center flex-wrap gap-1 sm:gap-10 md:gap-20 lg:gap-40 p-2 sm:p-4 h-20 shadow-lg sticky top-0 mb-6">
			<h1 className="font-semibold text-sm md:text-lg ">ExpireTrack</h1>
			<input
				type="text"
				placeholder="Search..."
				className="border border-background rounded-full outline-none px-2 py-2 sm:px-4 max-w-32 sm:max-w-fit"
			/>
			<div className="dropdown relative">
				<button className="border border-background px-2 py-2 sm:px-4 rounded hover:bg-background hover:text-textColor">
					Sort By
				</button>
				<ul className="content shadow bg-background text-textColor sm:w-32">
					<li className="p-2 hover:cursor-pointer hover:bg-gray-800 rounded hover:text-textColor">
						Expiry low-to-high
					</li>
					<li className="p-2 hover:cursor-pointer hover:bg-gray-800 rounded hover:text-textColor">
						Expiry high-to-low
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
