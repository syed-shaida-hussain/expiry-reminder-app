import jwt from 'jsonwebtoken';

export const getUserData = async (request) => {
	try {
		const encodedToken = request.cookies.get('token')?.value || '';
		const decodedToken = jwt.verify(encodedToken, process.env.SECRET_KEY);
		return decodedToken?.userId;
	} catch (error) {
		throw new Error(error?.message);
	}
};
