import { NextResponse } from 'next/server';

// Array of routes that do not require authorization
const allowedRoutes = [];

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Check if the current route is in the allowedRoutes array
  if (allowedRoutes.includes(pathname)) {
    return NextResponse.next(); // Skip authorization for allowed routes
  }

  // Perform authorization check for other routes
  const apiKey = req.headers.get('Authorization')?.split('Bearer ')[1]; // Extract API key

  // Check if API key exists and matches the environment variable
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // If the API key is valid, continue to the next handler
  return NextResponse.next();
}

// Optional: Specify the paths the middleware should apply to
export const config = {
  matcher: ['/api/:path*'] // Apply middleware to all /api routes
};
