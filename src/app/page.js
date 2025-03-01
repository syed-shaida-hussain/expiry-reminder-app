import Filters from './components/Filters';
import Header from './components/Header';
import { MdOutlineModeEdit } from 'react-icons/md';
import Sidebar from './components/Sidebar';

const dummyData = [
	{
		id: 1,
		name: 'namkeen tea',
		price: 600,
		quantity: '50',
		expiryDate: '05/03/2025',
	},
	{
		id: 2,
		name: 'lipton tea',
		price: 400,
		quantity: '30',
		expiryDate: '09/01/2025',
	},
	{
		id: 3,
		name: 'copy',
		price: 60,
		quantity: '1',
		expiryDate: '08/03/2026',
	},
	{
		id: 4,
		name: 'pen',
		price: 10,
		quantity: '10',
		expiryDate: '02/27/2025',
	},
	{
		id: 5,
		name: 'perfume',
		price: 200,
		quantity: '20',
		expiryDate: '02/28/2025',
	},
];

const calculateDaysToExpire = (expiryDate) => {
	const currentDate = new Date();
	const timeDifference = new Date(expiryDate) - currentDate;
	const daysLeftToExpire = Math.ceil(timeDifference / (1000 * 3600 * 24));
	return daysLeftToExpire;
};

const Homepage = () => {
	return (
		<div>
			<Filters />
			<main className="px-4">
				<div className="overflow-x-auto">
					<div className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
						<div className="hidden sm:flex bg-gray-200 p-3 font-semibold">
							<div className="flex-1 text-center">Name</div>
							<div className="flex-1 text-center">Price</div>
							<div className="flex-1 text-center">Quantity</div>
							<div className="flex-1 text-center">Days Till Expiry</div>
							<div className="flex-1 text-center">Action</div>
						</div>
						{dummyData.map((item, index) => (
							<div
								key={index}
								className="flex flex-col gap-4 sm:flex-row p-3 border-b last:border-b-0 items-center mb-8 sm:mb-0"
							>
								<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center sm:block">
									<span className="sm:hidden font-semibold">Name: </span>
									{item.name}
								</div>
								<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center sm:block">
									<span className="sm:hidden font-semibold">Price: </span>
									{item.price}
								</div>
								<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center sm:block">
									<span className="sm:hidden font-semibold">Quantity: </span>
									{item.quantity}
								</div>
								<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center sm:block">
									<span className="sm:hidden font-semibold">
										Days Till Expiry:{' '}
									</span>
									{calculateDaysToExpire(item.expiryDate)}
								</div>
								<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center sm:block">
									<span className="sm:hidden font-semibold">Action: </span>
									<button className="px-3 py-1 rounded">
										<MdOutlineModeEdit />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Homepage;
