import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { corsProxy, loggerProxy, authProxy } from '@/lib/proxy/apiProxies'

export function proxy (request: NextRequest) {
  loggerProxy(request)

  const pathname = request.nextUrl.pathname
  if (pathname.startsWith('/api/admin')) {
    const authError = authProxy(request)
    if (authError) return authError
  }

  let response = NextResponse.next()

  if (pathname.startsWith('/api')) {
    response = corsProxy(request, response)
  }

  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: response.headers,
    })
  }
  return response
}

export const config = {
  matcher: '/api/:path*',
}
