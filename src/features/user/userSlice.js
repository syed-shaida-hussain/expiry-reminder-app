import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';

const initialState = {
	user: {},
	isUserLoggedIn: getCookie('token') ? true : false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: () => {},
		logoutUser: () => {},
	},
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
