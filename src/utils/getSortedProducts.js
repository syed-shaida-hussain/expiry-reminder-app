export const getSortedProducts = (products, sortBy) => {
	return products?.slice().sort((a, b) => {
		const dateA = new Date(a.expiryDate);
		const dateB = new Date(b.expiryDate);

		if (sortBy === 'LOW_EXPIRY_FIRST') {
			return dateA - dateB;
		}
		if (sortBy === 'HIGH_EXPIRY_FIRST') {
			return dateB - dateA;
		}
		return products;
	});
};
