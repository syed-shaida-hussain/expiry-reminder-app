import { connect } from '@/app/dbConfig/dbConfig';
import User from '@/models/userModel';
import { handleErrors } from '@/utils/handleErrors';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { createToken } from '@/utils/createToken';

connect();

export async function POST(request) {
	const { username, password } = await request.json();
	try {
		if (!username) {
			throw Error('username is required');
		}
		if (!password) {
			throw Error('Password is required');
		}
		const user = await User.findOne({ username });
		if (!user) {
			throw Error('incorrect username');
		}
		const isPasswordEqual = await bcrypt.compare(password, user?.password);
		if (!isPasswordEqual) {
			throw Error('incorrect password');
		}

		const token = createToken(user._id);
		return NextResponse.json(
			{
				message: 'Login Successfull',
				success: true,
				status: 200,
				user,
				token,
			},
			{ status: 200 }
		);
	} catch (error) {
		const errors = handleErrors(error);
		return NextResponse.json(
			{
				message: 'Login failed',
				success: false,
				status: 500,
				errors,
			},
			{ status: 500 }
		);
	}
}
