import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  // Check if the request is for an API route
  if (pathname.startsWith(`/api/`)) {
    // Check if the Authorization header is provided and starts with "Bearer "
    const authorizationHeader = req.headers.get('Authorization');

    // If no Authorization header is provided or it doesn't start with "Bearer ", return unauthorized response
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Extract the API key from the Authorization header
    const apiKey = authorizationHeader.split(' ')[1];

    // If the API key doesn't match the expected value, return unauthorized response
    if (apiKey !== API_KEY) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  api: {
    bodyParser: false
  },
  HIDDEN: {
    bodyParser: false
  }
};
