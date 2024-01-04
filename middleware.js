import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = (request) => {
  const authToken = cookies().get("authToken")?.value || "";
  let path = request.nextUrl.pathname;
  if (
    path === "/api/login" ||
    path === "/api/signup" ||
    path === "/api/login-user" ||
    path === "/api/product" ||
    /^\/api\/product\/\w+$/.test(path) ||
    path === "/api/cart" ||
    path === "/api/category" ||
    /^\/api\/category\/\w+$/.test(path) ||
    path === "/api/relatedProducts" ||
    /^\/api\/relatedProducts\/\w+$/.test(path)
  ) {
    return null;
  }
  const loggedInUserNotAccessPath =
    path === "/loginpage" || path === "/signupPage";

  if (loggedInUserNotAccessPath) {
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  } else {
    if (!authToken) {
      if (path.startsWith("/api") || path === "/dashboard") {
        return NextResponse.redirect(new URL("/", request.nextUrl));
      }
    }
  }
};
export const config = {
  matcher: ["/", "/loginpage", "/signupPage", "/dashboard", "/api/:path*"],
};
