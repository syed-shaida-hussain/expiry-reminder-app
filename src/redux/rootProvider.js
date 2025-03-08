'use client';

import { Provider } from 'react-redux';
import { store } from './store';

export function RootProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
