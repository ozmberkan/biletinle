import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";

const AUTH_PAGES = ["/giris-yap", "/kayit-ol"];
const isAuthPages = (url: string) => AUTH_PAGES.some((page) => url.startsWith(page));

const PAGE_CLAIMS: Record<string, string> = {
  "/panel/bilet-duzenle": "update-ticket",
  "/panel/kullanici-ekle": "add-user",
};

export const middleware = async (request: NextRequest) => {
  const { url, nextUrl, cookies } = request;
  const token = cookies.get("accessToken")?.value ?? null;
  const pathname = nextUrl.pathname;

  const tokenPayload = token ? await verifyToken(token) : null;
  const isAuthPageRequested = isAuthPages(pathname);

  if (isAuthPageRequested) {
    if (!tokenPayload) return NextResponse.next();
    return NextResponse.redirect(new URL("/", url));
  }

  if (!tokenPayload) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", pathname);
    return NextResponse.redirect(new URL(`/giris-yap?${searchParams.toString()}`, url));
  }

  const requiredClaim = PAGE_CLAIMS[pathname];
  if (requiredClaim && !Array.isArray(tokenPayload.claims) ? false : tokenPayload.claims?.includes(requiredClaim)) {
    return NextResponse.redirect(new URL("/403", url)); 
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/giris-yap", "/kayit-ol", "/panel/:path*"],
};
