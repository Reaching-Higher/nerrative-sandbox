import { NextResponse } from 'next/server'

import communityData from './community.json'

export async function GET() {
  return NextResponse.json(communityData)
}