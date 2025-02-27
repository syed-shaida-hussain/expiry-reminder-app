import Header from './components/Header';
import { MdOutlineModeEdit } from 'react-icons/md';

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
			<Header />
			<main className="p-6">
				<h1 className="text-2xl font-bold mb-4 text-center">Product List</h1>
				<div className="flex flex-col gap-5 sm:gap-3">
					<div className="flex bg-gray-100 border-b p-1 sm:p-2">
						{/* <div className="w-full md:w-1/12 font-semibold text-center">ID</div> */}
						<div className="w-full md:w-3/12 font-semibold text-center">
							Name
						</div>
						<div className="w-full md:w-2/12 font-semibold text-center">
							Price
						</div>
						<div className="w-full md:w-2/12 font-semibold text-center">
							Quantity
						</div>
						<div className="w-full md:w-3/12 font-semibold text-center">
							Days till expiry
						</div>
					</div>

					{dummyData.map((product) => (
						<div
							key={product.id}
							className="flex items-start border-b p-1 sm:p-2 hover:bg-gray-50"
						>
							{/* <div className="w-full md:w-1/12 text-center">{product.id}</div> */}
							<div className="w-full md:w-3/12 text-center">{product.name}</div>
							<div className="w-full md:w-2/12 text-center">
								₹{product.price}
							</div>
							<div className="w-full md:w-2/12 text-center">
								{product.quantity}
							</div>
							<div className="w-full md:w-3/12 text-center">
								{calculateDaysToExpire(product.expiryDate)}
							</div>
							<button className="mx-auto">
								<MdOutlineModeEdit className="w-6 h-6" />
							</button>
						</div>
					))}
				</div>
			</main>
		</div>
	);
};

export default Homepage;
