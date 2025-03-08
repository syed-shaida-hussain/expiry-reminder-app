import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const response = NextResponse.json(
			{
				message: 'Logout Successfull',
				success: true,
				status: 200,
			},
			{
				status: 200,
			}
		);
		response.cookies.set('token', '', {
			httpOnly: true,
			expires: new Date(0),
		});
		return response;
	} catch (error) {
		return NextResponse.json(
			{
				error: error?.message,
				message: 'Logout failed',
				success: false,
				status: 500,
			},
			{
				status: 500,
			}
		);
	}
}
