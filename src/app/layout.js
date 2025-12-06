import { RootProvider } from '@/redux/rootProvider';
import './globals.css';
import Header from '@/components/Header';
import { Toaster } from 'react-hot-toast';

export const metadata = {
	title: 'Expiry Reminder',
	description:
		'An app made to help business owners stay ahead of expiry dates and reduce losses.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`antialiased bg-background`}>
				<RootProvider>
					<Header />
					{children}
					<Toaster />
				</RootProvider>
			</body>
		</html>
	);
}
