import { NextResponse, NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  const { cookies, url, nextUrl } = req;

  const { pathname } = nextUrl;


  const AUTH_PAGES = ['/giris-yap', '/kayit-ol', '/parolami-unuttum'];
  const isAuthPage = AUTH_PAGES.includes(pathname);

  const token = cookies.get("token")?.value;

  if (isAuthPage && token) {
    return Response.redirect(new URL('/', req.url));
  }

  if (pathname.startsWith('/protected') && !token) {
    return Response.redirect(new URL('/giris-yap', req.url));
  }

  return NextResponse.next();
}