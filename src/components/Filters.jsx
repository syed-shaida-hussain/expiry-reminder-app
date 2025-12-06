'use client';

import { useState, useRef, useEffect } from 'react';

const Filters = ({ filterState, setFilterState }) => {
	const [searchTimeout, setSearchTimeout] = useState(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Close dropdown if clicked outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleInputChange = (e) => {
		if (searchTimeout) clearTimeout(searchTimeout);
		setSearchTimeout(
			setTimeout(() => {
				setFilterState({ ...filterState, searchQuery: e.target.value });
			}, 500) // debounce search
		);
	};

	return (
		<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6">
			{/* Search Input */}
			<input
				type="text"
				placeholder="Search products..."
				className="border border-gray-300 bg-surfaceColor rounded-full outline-none px-4 py-2 w-full sm:w-96 transition focus:ring-2 focus:ring-background"
				onChange={handleInputChange}
			/>

			{/* Dropdown */}
			<div className="relative" ref={dropdownRef}>
				<button
					onClick={() => setIsDropdownOpen((prev) => !prev)}
					className="flex items-center gap-2 border border-gray-300 px-4 py-1 rounded-full bg-surfaceColor hover:bg-background hover:text-textColor transition"
				>
					Sort By Expiry
					<span className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
						▼
					</span>
				</button>

				{/* Dropdown List */}
				{isDropdownOpen && (
					<ul className="absolute right-0 mt-2 w-48 bg-surfaceColor border border-gray-300 rounded-lg shadow-lg z-50 overflow-hidden">
						<li className="p-3 hover:bg-background hover:text-textColor ">
							<label className="flex items-center gap-2 w-full cursor-pointer">
								<input
									type="radio"
									name="sort"
									checked={filterState.sortBy === 'LOW_EXPIRY_FIRST'}
									onChange={() =>
										setFilterState({ ...filterState, sortBy: 'LOW_EXPIRY_FIRST' })
									}
								/>
								Low Expiry First
							</label>
						</li>
						<li className="p-3 hover:bg-background hover:text-textColor ">
							<label className="flex items-center gap-2 w-full cursor-pointer">
								<input
									type="radio"
									name="sort"
									checked={filterState.sortBy === 'HIGH_EXPIRY_FIRST'}
									onChange={() =>
										setFilterState({ ...filterState, sortBy: 'HIGH_EXPIRY_FIRST' })
									}
								/>
								High Expiry First
							</label>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
};

export default Filters;
