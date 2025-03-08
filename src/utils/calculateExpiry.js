export const calculateDaysToExpire = (expiryDate) => {
	const currentDate = new Date();
	const timeDifference = new Date(expiryDate) - currentDate;
	const daysLeftToExpire = Math.ceil(timeDifference / (1000 * 3600 * 24));
	return daysLeftToExpire;
};
