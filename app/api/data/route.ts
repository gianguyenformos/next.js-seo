import { NextResponse } from 'next/server'
import { getData } from '@/app/lib/data'

// Fake API
export async function GET() {
  const data = await getData()
  return NextResponse.json(data)
}
