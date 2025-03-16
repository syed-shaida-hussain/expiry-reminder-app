import { connect } from '@/app/dbConfig/dbConfig';
import Product from '@/models/productModel';
import { NextResponse } from 'next/server';

connect();

export async function GET(request, { params }) {
	try {
		const { id } = params;
		const product = await Product.findById({ _id: id });
		if (!product) {
			return NextResponse.json(
				{
					message: 'Product not found',
					product,
					status: 404,
					success: false,
				},
				{ status: 404 }
			);
		}
		return NextResponse.json(
			{
				message: 'Product found successfully',
				product,
				status: 200,
				success: true,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				error,
				message: 'Problem in fetching product',
				status: 500,
				success: false,
			},
			{ status: 500 }
		);
	}
}
