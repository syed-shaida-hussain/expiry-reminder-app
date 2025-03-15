import { connect } from '@/app/dbConfig/dbConfig';
import Product from '@/models/productModel';
import User from '@/models/userModel';
import { getUserData } from '@/utils/getUserData';
import { NextResponse } from 'next/server';

connect();

export async function POST(request) {
	try {
		const { name, price, quantity, expiryDate } = await request.json();
		if (!name || !price || !quantity || !expiryDate) {
			return NextResponse.json(
				{
					message: 'Please enter all required fields',
					success: false,
					status: 500,
				},
				{ status: 500 }
			);
		}

		const userId = await getUserData(request);

		const user = await User.findById({ _id: userId });

		if (!user) {
			return NextResponse.json(
				{
					message: 'Login to add product',
					success: false,
					status: 404,
				},
				{ status: 404 }
			);
		}

		const newProduct = await Product.create({
			name,
			price,
			quantity,
			expiryDate,
			userId,
		});

		return NextResponse.json(
			{
				message: 'Product added successfully',
				newProduct,
				success: true,
				status: 201,
			},
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: 'Error in adding product',
				error,
				success: false,
				status: 500,
			},
			{ status: 500 }
		);
	}
}

export async function GET(request) {
	try {
		const userId = await getUserData(request);

		const products = await Product.find({ userId: userId });
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
