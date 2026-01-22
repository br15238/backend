import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { ALLOWED_ORIGINS } from '@/lib/constants'

export function corsProxy (request: NextRequest, response: NextResponse) {
  const origin = request.headers.get('origin')
  const isAllowedOrigin = origin && ALLOWED_ORIGINS.includes(origin)

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }

  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT,OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
  response.headers.set('Access-Control-Max-Age', '86400')
  response.headers.set('Vary', 'Origin')

  return response
}

export function loggerProxy (request: NextRequest) {
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.nextUrl.pathname}`)
}

export function authProxy (request: NextRequest) {
  // const token = request.headers.get('authorization')
  // if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return null
}
