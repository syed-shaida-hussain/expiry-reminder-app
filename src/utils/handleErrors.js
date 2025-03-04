export const handleErrors = (error) => {
	let errors = { username: '', password: '' };

	if (error.message === 'username is required') {
		errors.username = 'Username required';
	}

	if (error.message === 'Password is required') {
		errors.password = 'Password required';
	}

	if (error.message === 'password should be greater than or equal to 8') {
		errors.password = 'Password should be greater than 7';
	}

	if (error.message.includes('username already registered')) {
		errors.username = 'Username already registered';
		return errors;
	}

	if (error.message.includes('users validation failed')) {
		Object.values(error.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
	}
	return errors;
};
