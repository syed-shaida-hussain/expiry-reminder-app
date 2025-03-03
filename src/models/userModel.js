import mongoose from 'mongoose';

const userSchema = new mongoose.schema(
	{
		username: {
			type: String,
			required: [true, 'Username required'],
			unique: true,
			lowercase: true,
			minlength: [4, 'username should be greater than or equal to 4'],
		},
		password: {
			type: String,
			required: [true, 'Password required'],
			minlength: [8, 'password should be greater than or equal to 8'],
		},
	},
	{ timeStamps: true }
);

const User = mongoose.models.users || mongoose.model('users', userSchema);
