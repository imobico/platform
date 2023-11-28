import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

import type { Database } from '@/types/db'

const authAppRoutes = ['/entrar', '/cadastro', '/definir-senha', '/conta-confirmada']
const publicAppRoutes = ['/']
export const config = {
  matcher: ['/app/:path*', '/entrar', '/cadastro']
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
  const isPublicAppRoute = publicAppRoutes.includes(path)
  const isAuthAppRoute = authAppRoutes.includes(path)

  if (!isSessionValid && !isPublicAppRoute && !isAuthAppRoute) {
    return NextResponse.redirect(new URL('/entrar', req.url))
  } else if (isSessionValid && isAuthAppRoute) {
    return NextResponse.redirect(new URL('/app', req.url))
  } else {
    return res
  }
}
