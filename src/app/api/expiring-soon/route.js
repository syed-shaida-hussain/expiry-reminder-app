import { connect } from '@/app/dbConfig/dbConfig';
import Product from '@/models/productModel';
import { getUserData } from '@/utils/getUserData';
import { NextResponse } from 'next/server';

connect();

export async function GET(request) {
	try {
		const userId = await getUserData(request);
		const currentDate = new Date();
		const thresholdDate = new Date();
		thresholdDate.setDate(currentDate.getDate() + 20);
		const products = await Product.find({
			userId,
			expiryDate: { $lte: thresholdDate },
		}).sort({ expiryDate: 1 });
		return NextResponse.json(
			{
				message: 'Products fetched successfully',
				products,
				success: true,
				status: 200,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: 'Error in fetching product',
				error,
				success: false,
				status: 500,
			},
			{ status: 500 }
		);
	}
}
