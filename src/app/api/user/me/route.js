import { connect } from '@/app/dbConfig/dbConfig';
import User from '@/models/userModel';
import { getUserData } from '@/utils/getUserData';
import { NextResponse } from 'next/server';

connect();

export async function GET(request) {
	try {
		const userId = await getUserData(request);
		const user = await User.findById({ _id: userId }).select('-password');
		return NextResponse.json(
			{
				message: 'user found',
				status: 200,
				user,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{
				error: error.message,
				status: 400,
				success: false,
			},
			{ status: 400 }
		);
	}
}
