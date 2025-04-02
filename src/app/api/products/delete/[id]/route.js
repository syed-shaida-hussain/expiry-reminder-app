import { connect } from '@/app/dbConfig/dbConfig';
import Product from '@/models/productModel';
import { NextResponse } from 'next/server';

connect();

export async function DELETE(request, { params }) {
	try {
		const { id } = params;
		const deletedProduct = await Product.findByIdAndDelete({ _id: id });
		return NextResponse.json(
			{
				message: 'Product deleted successfully',
				deletedProduct,
				success: true,
				status: 200,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: 'Error in deleting product',
				error,
				success: false,
				status: 500,
			},
			{ status: 500 }
		);
	}
}
