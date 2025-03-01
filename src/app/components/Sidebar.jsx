import React from 'react';
import { Md10K } from 'react-icons/md';

const Sidebar = () => {
	return (
		<aside className="h-screen w-fit sm:w-64 bg-red-500 text-textColor z-30 absolute top-0 left-0 ">
			<div className="flex justify-between items-center p-4">
				<span className="font-semibold hidden sm:inline">ExpireTrack</span>
				<Md10K size={40} />
			</div>
			<nav>
				<ul className="flex flex-col gap-4">
					<li className="flex justify-between items-center px-4 py-2">
						<Md10K size={40} />
						<span className="hidden sm:inline">Home</span>
					</li>
					<li className="flex justify-between items-center px-4 py-2">
						<Md10K size={40} />
						<span className="hidden sm:inline">Expiring soon</span>
					</li>
					<li className="flex justify-between items-center px-4 py-2">
						<Md10K size={40} />
						<span className="hidden sm:inline">Low Stock</span>
					</li>
					<li className="flex justify-between items-center px-4 py-2">
						<Md10K size={40} />
						<span className="hidden sm:inline">Out of stock</span>
					</li>
					<li className="flex justify-between items-center px-4 py-2">
						<Md10K size={40} />
						<span className="hidden sm:inline">Expired items</span>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
