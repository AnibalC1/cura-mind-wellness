import { NextResponse } from 'next/server'

// Temporary diagnostic endpoint. Reports whether OPENAI_API_KEY is loaded
// on the running server, without exposing the value. Remove once chat is verified working.
export async function GET() {
  const key = process.env.OPENAI_API_KEY ?? ''
  return NextResponse.json({
    openaiKeyPresent: key.length > 0,
    keyLength: key.length,
    keyStartsWith: key.slice(0, 7),
    nodeEnv: process.env.NODE_ENV,
  })
}
