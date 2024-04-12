import { NextResponse, type NextRequest } from "next/server"

const locales = ["en", "ja"]

function getLocale(request: NextRequest) {
  const headerList = request.headers
  const acceptLanguage = headerList.get("Accept-Language")
  const locale = acceptLanguage?.split(",")[0] || "en"
  if (locales.includes(locale)) return locale
  return "en"
}

export default async function middleware(request: NextRequest) {
  const theme = request.cookies.get("ui-color-mode")?.value || "dark"
  const { pathname } = request.nextUrl
  let newPathname = pathname
  const pathnameHasLocale = locales.some((locale) => {
    if (pathname.startsWith(`/${locale}/`)) {
      newPathname = pathname.replace(`/${locale}`, "")
      return true
    }
    if (pathname === `/${locale}`) {
      newPathname = "/"
      return true
    }
    return false
  })

  if (theme !== "dark" && theme !== "light") {
    request.headers.set("ui-color-mode", "dark")
  }

  if (pathnameHasLocale) {
    request.headers.set("x-locale", newPathname)
    request.headers.set("x-pathname", newPathname)
    return NextResponse.next()
  }

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${newPathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
