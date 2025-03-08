import { NextResponse } from 'next/server';

export function middleware(req) {
	const authToken = req.cookies.get('token')?.value || '';
	const protectedRoutes = [
		'/',
		'/expired',
		'/expiring-soon',
		'/low-stock',
		'/out-of-stock',
	];

	if (!authToken && protectedRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL('/login', req.url));
	}

	if (authToken && ['/login', '/signup'].includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL('/', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		'/',
		'/expired',
		'/expiring-soon',
		'/low-stock',
		'/out-of-stock',
		'/login',
		'/signup',
	],
};
