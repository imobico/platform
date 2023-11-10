import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

import type { Database } from '@/types/db'

const publicAppRoutes = ['/', '/entrar', '/cadastro', '/definir-senha', '/conta-confirmada']

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)'
  ]
}

export default async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Check current session
  const supabase = createMiddlewareClient<Database>({ req, res })
  const session = await supabase.auth.getSession()

  const isSessionValid = (await !!session) && !!session?.data?.session

  // // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const url = req.nextUrl
  const path = url.pathname
  const isNotPublicAppRoute = !publicAppRoutes.includes(path)

  if (!isSessionValid && isNotPublicAppRoute) {
    return NextResponse.redirect(new URL('/entrar', req.url))
  } else if (isSessionValid && path == '/entrar') {
    return NextResponse.redirect(new URL('/app', req.url))
  } else {
    return res
  }
}