export const handleErrors = (error) => {
	let errors = { username: '', password: '' };

	if (error.message === 'username is required') {
		errors.username = 'username is required';
	}

	if (error.message === 'Password is required') {
		errors.password = 'Password is required';
	}

	if (error.message === 'password should be greater than or equal to 8') {
		errors.password = 'password should be greater than or equal to 8';
	}

	if (error.message.includes('username already registered')) {
		errors.username = 'username already registered';
		return errors;
	}

	if (error.message.includes('users validation failed')) {
		Object.values(error.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
	}
	return errors;
};
