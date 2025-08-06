import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";

const AUTH_PAGES = ["/giris-yap", "/kayit-ol"];
const isAuthPages = (url: string) => AUTH_PAGES.some((page) => url.startsWith(page));


export const middleware = async(request: NextRequest) => {
  const {url, nextUrl, cookies} = request;
  
  const token = cookies.get('accessToken')?.value ?? null;


  const hasVerifiedToken = token && (await verifyToken(token))
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if(isAuthPageRequested){
    if(!hasVerifiedToken){
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/', url));
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);

    return NextResponse.redirect(new URL(`/giris-yap${searchParams}`, url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/giris-yap", "/kayit-ol", "/panel"],
}