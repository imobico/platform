import { NextRequest, NextResponse } from 'next/server'

const authAppRoutes = ['/entrar', '/cadastro', '/definir-senha', '/conta-confirmada']
const publicAppRoutes = ['/']
export const config = {
  matcher: ['/app/:path*', '/entrar', '/cadastro']
}

export default async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Check current session

  const authToken = req.cookies.get('auth_token')

  const isSessionValid = !!authToken

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
