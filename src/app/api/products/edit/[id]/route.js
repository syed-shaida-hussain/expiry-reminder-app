import { connect } from '@/app/dbConfig/dbConfig';
import Product from '@/models/productModel';
import { NextResponse } from 'next/server';

connect();

export async function PUT(request, { params }) {
	try {
		const { id } = await params;
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
		const product = await Product.findById({ _id: id });
		product.name = name;
		product.price = price;
		product.quantity = quantity;
		product.expiryDate = expiryDate;
		const updatedProduct = await product.save();

		return NextResponse.json(
			{
				message: 'Product edited successfully',
				updatedProduct,
				success: true,
				status: 200,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: 'Error in editing product',
				error,
				success: false,
				status: 500,
			},
			{ status: 500 }
		);
	}
}
