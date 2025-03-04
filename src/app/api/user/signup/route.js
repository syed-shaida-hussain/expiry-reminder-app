import User from '@/models/userModel';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { connect } from '@/app/dbConfig/dbConfig';
import { handleErrors } from '@/utils/handleErrors';

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
		if (password.length < 8) {
			throw Error('password should be greater than 7');
		}

		const existingUser = await User.findOne({ username });
		if (existingUser) {
			throw Error('username already registered');
		}
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const newUser = await User.create({ username, password: hashedPassword });
		return NextResponse.json(
			{
				message: 'User Created Successfully',
				success: true,
				status: 201,
				newUser,
			},
			{ status: 201 }
		);
	} catch (error) {
		const errors = handleErrors(error);
		return NextResponse.json({
			message: 'Problem in signing up',
			errors,
			status: 500,
		});
	}
}
