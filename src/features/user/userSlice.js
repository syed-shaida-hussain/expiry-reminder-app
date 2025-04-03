import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';

const initialState = {
	loggedInUser: {},
	isUserLoggedIn: getCookie('token') ? true : false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			state.loggedInUser = action?.payload;
			state.isUserLoggedIn = true;
		},
		logoutUser: (state) => {
			state.loggedInUser = {};
			state.isUserLoggedIn = false;
		},
	},
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
