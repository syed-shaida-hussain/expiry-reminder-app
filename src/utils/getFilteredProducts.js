export const getFilteredProducts = (products, query) => {
	if (!query) return products;
	return products.filter((product) =>
		product?.name?.toLowerCase().includes(query?.toLowerCase())
	);
};
