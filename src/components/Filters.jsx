import React from 'react';

const Filters = ({ searchQuery, setSearchQuery }) => {
	return (
		<div className="flex justify-center items-center gap-4 mb-6 sm:gap-10">
			<input
				type="text"
				placeholder="Search products..."
				className="border border-background rounded-full outline-none px-4 py-3 w-2/4 sm:w-96"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
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
		</div>
	);
};

export default Filters;
