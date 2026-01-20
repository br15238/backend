import { NextRequest, NextResponse } from 'next/server'

const allowedOrigins = [
  'http://localhost:3000',
  'https://suanriz.github.io'
]

export function middleware (request: NextRequest) {
  const origin = request.headers.get('origin')
  const isAllowedOrigin = origin && allowedOrigins.includes(origin)

  if (request.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 204 })
    
    if (isAllowedOrigin) {
      response.headers.set('Access-Control-Allow-Origin', origin)
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
      response.headers.set('Access-Control-Max-Age', '86400')
      response.headers.set('Vary', 'Origin')
    }
    return response
  }

  const response = NextResponse.next()

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Vary', 'Origin')
  }
  return response
}

export const config = {
  matcher: '/api/:path*',
}
