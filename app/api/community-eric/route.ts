import { NextRequest, NextResponse } from 'next/server'

import communityData from './community.json'

function withExceptionFilter(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async function (req: NextRequest): Promise<NextResponse> {
    try {
      return await handler(req);
    } catch (exception) {
      console.error(exception);
      const response = NextResponse.json({ error: 'An error occurred' });
      response.headers.set('Cache-Control', 'no-store');
      return response;
    }
  }
}

export const GET = withExceptionFilter(async (_: NextRequest) => {
  const response = NextResponse.json(communityData);
  response.headers.set('Cache-Control', 'no-store');
  return response;
});