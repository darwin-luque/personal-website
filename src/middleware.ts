import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	// A list of all locales that are supported
	locales: ['en', 'es'],

	// Used when no locale matches
	defaultLocale: 'en',
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(es|en)/:path*', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
