'use client';

import { useState } from 'react';

const Filters = ({ filterState, setFilterState }) => {
	const [timeoutId, setTimeoutId] = useState(null);
	const handleInputChange = (e) => {
		if (timeoutId) clearTimeout(timeoutId);
		setTimeoutId(
			setTimeout(() => {
				setFilterState({ ...filterState, searchQuery: e.target.value });
			}, 1000)
		);
	};
	return (
		<div className="flex justify-center items-center gap-4 mb-6 sm:gap-10">
			<input
				type="text"
				placeholder="Search products..."
				className="border border-background rounded-full outline-none px-4 py-3 w-2/4 sm:w-96"
				onChange={handleInputChange}
			/>
			<div className="dropdown relative">
				<button className="border border-background px-2 py-2 sm:px-4 rounded hover:bg-background hover:text-textColor">
					Sort By Expiry
				</button>
				<ul className="content shadow bg-background text-textColor rounded">
					<li className="p-2 hover:cursor-pointer hover:bg-gray-800 rounded hover:text-textColor">
						<label
							htmlFor="LOW_EXPIRY_FIRST"
							className="flex items-center gap-6 hover:cursor-pointer"
						>
							<input
								id="LOW_EXPIRY_FIRST"
								type="radio"
								name="sort"
								checked={
									filterState?.sortBy &&
									filterState?.sortBy === 'LOW_EXPIRY_FIRST'
								}
								onChange={(e) =>
									setFilterState({ ...filterState, sortBy: 'LOW_EXPIRY_FIRST' })
								}
								className="hover:cursor-pointer"
							/>
							Low Expiry
						</label>
					</li>
					<li className="p-2 hover:cursor-pointer hover:bg-gray-800 rounded hover:text-textColor">
						<label
							htmlFor="HIGH_EXPIRY_FIRST"
							className="flex items-center gap-6 hover:cursor-pointer"
						>
							<input
								id="HIGH_EXPIRY_FIRST"
								type="radio"
								name="sort"
								checked={
									filterState?.sortBy &&
									filterState?.sortBy === 'HIGH_EXPIRY_FIRST'
								}
								onChange={(e) =>
									setFilterState({
										...filterState,
										sortBy: 'HIGH_EXPIRY_FIRST',
									})
								}
								className="hover:cursor-pointer"
							/>
							High Expiry
						</label>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Filters;
