import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Username required'],
			unique: true,
			lowercase: true,
			minlength: [5, 'Username should be greater than 4'],
		},
		password: {
			type: String,
			required: [true, 'Password required'],
			minlength: [8, 'password should be greater than 7'],
		},
	},
	{
		timeStamps: true,
	}
);

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
