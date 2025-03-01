import { MdOutlineModeEdit } from 'react-icons/md';

const ProductCard = ({ product }) => {
	const calculateDaysToExpire = (expiryDate) => {
		const currentDate = new Date();
		const timeDifference = new Date(expiryDate) - currentDate;
		const daysLeftToExpire = Math.ceil(timeDifference / (1000 * 3600 * 24));
		return daysLeftToExpire;
	};
	return (
		<div
			className={`flex flex-col gap-4 sm:flex-row p-3 border-b-4 sm:border-b-2 last:border-b-0 products-center mb-8 sm:mb-0 ${calculateDaysToExpire(product.expiryDate) < 20 ? 'bg-red-400' : calculateDaysToExpire(product.expiryDate) < 40 ? 'bg-yellow-400' : 'bg-green-400'}`}
		>
			<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center gap-4 sm:block">
				<span className="sm:hidden font-semibold">Name: </span>
				{product.name}
			</div>
			<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center gap-4 sm:block">
				<span className="sm:hidden font-semibold">Price: </span>
				{product.price}
			</div>
			<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center gap-4 sm:block">
				<span className="sm:hidden font-semibold">Quantity: </span>
				{product.quantity}
			</div>
			<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center gap-4 sm:block">
				<span className="sm:hidden font-semibold">Days Till Expiry: </span>
				{calculateDaysToExpire(product.expiryDate)}
			</div>
			<div className="w-full sm:flex-1 sm:w-auto flex justify-between text-center gap-4 sm:block">
				<span className="sm:hidden font-semibold">Edit: </span>
				<button className="px-3 py-1 rounded">
					<MdOutlineModeEdit />
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
