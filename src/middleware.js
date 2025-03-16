import { NextResponse } from 'next/server';

export function middleware(req) {
	const authToken = req.cookies.get('token')?.value || '';
	const pathname = req.nextUrl.pathname;

	const protectedRoutes = ['/', '/add-product', '/expiring-soon'];
	const isProtected =
		protectedRoutes.includes(pathname) || pathname.startsWith('/edit/');

	if (!authToken && isProtected) {
		return NextResponse.redirect(new URL('/login', req.url));
	}

	if (authToken && ['/login', '/signup'].includes(pathname)) {
		return NextResponse.redirect(new URL('/', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		'/',
		'/add-product',
		'/expiring-soon',
		'/edit/:path*',
		'/login',
		'/signup',
	],
};
