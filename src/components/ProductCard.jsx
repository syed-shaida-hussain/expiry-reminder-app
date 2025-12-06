import { calculateDaysToExpire } from '@/utils/calculateExpiry';
import Link from 'next/link';
import { MdOutlineModeEdit } from 'react-icons/md';

const ProductCard = ({ product }) => {
	const days = calculateDaysToExpire(product.expiryDate);

	const getExpiryColor = () => {
		if (days < 0) return 'bg-red-600 text-white';
		if (days < 20) return 'bg-red-500 text-white';
		if (days < 40) return 'bg-yellow-500 text-black';
		return 'bg-green-500 text-white';
	};

	return (
		<div className="bg-black/15 shadow-lg rounded-lg p-4 mb-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
			<div
				className={`text-sm font-semibold text-center px-3 py-1 rounded-full w-fit mx-auto mb-4 ${getExpiryColor()}`}
			>
				{days > 0
					? `Expires in ${days} days`
					: `Expired ${Math.abs(days)} days ago`}
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center text-center sm:text-left">
				<div className="flex flex-col">
					<span className="text-gray-500 font-medium sm:text-sm">Name</span>
					<span className="text-lg font-semibold">{product.name}</span>
				</div>

				<div className="flex flex-col">
					<span className="text-gray-500 font-medium sm:text-sm">Price</span>
					<span className="text-lg font-semibold text-green-600">
						{product.price}
					</span>
				</div>

				<div className="flex flex-col">
					<span className="text-gray-500 font-medium sm:text-sm">Quantity</span>
					<span
						className={`text-lg font-semibold ${
							product.quantity < 10 ? 'text-red-500' : 'text-green-600'
						}`}
					>
						{product.quantity}
					</span>
				</div>

				<div className="flex justify-center sm:justify-end">
					<Link
						href={`/edit/${product?._id}`}
						className="bg-background text-textColor p-2 rounded-lg hover:bg-black/80 transition flex items-center justify-center"
						title="Edit Product"
					>
						<MdOutlineModeEdit size={22} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
