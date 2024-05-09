import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
	// Negotiator expects plain object so we need to transform headers
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	const locales: string[] = i18n.locales;

	// Use negotiator and intl-localematcher to get best locale
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
		locales,
	);

	const locale = matchLocale(languages, locales, i18n.defaultLocale);

	return locale;
}

export function middleware(request: NextRequest) {
	console.log('middleware');
	const pathname = request.nextUrl.pathname;
	console.log(pathname);

	// // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
	// // If you have one
	if (
		[
			'/manifest.json',
			'/favicon.ico',
			'/android-chrome-192x192.png',
			'/android-chrome-512x512.png',
			'/apple-touch-icon.png',
			'/blog-app-preview.png',
			'/browserconfig.xml',
			'/favicon-16x16.png',
			'/favicon-32x32.png',
			'/favicon.svg',
			'/mstile-70x70.png',
			'/mstile-144x144.png',
			'/mstile-150x150.png',
			'/mstile-310x150.png',
			'/mstile-310x310.png',
			'/safari-pinned-tab.svg',
			'/site.webmanifest',
		].includes(pathname)
	) {
		return;
	}

	// Check if there is any supported locale in the pathname
	const pathnameIsMissingLocale = i18n.locales.every(
		(locale) =>
			!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
	);
	console.log(pathnameIsMissingLocale);

	// Redirect if there is no locale
	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);
		console.log(locale);

		return NextResponse.redirect(
			new URL(
				`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
				request.url,
			),
			{
				status: 302,
			},
		);
	}
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"],
};
