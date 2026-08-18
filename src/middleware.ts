import { NextRequest, NextResponse } from "next/server";

const roleForPath = (path: string) => {
  if (
     path.startsWith("/coach") ||
     path.startsWith("/learning") ||
     path.startsWith("/resources") ||
     // path.startsWith("/community") ||
    path.startsWith("/dashboard")
  ) return "parent";
  if (path.startsWith("/analytics")) return "institution";
  if (path.startsWith("/cms") || path.startsWith("/moderation")) return "admin";
  return null;
};

// ✅ Use default export instead of named export
export default function middleware(req: NextRequest) {
  const requiredRole = roleForPath(req.nextUrl.pathname);
  if (!requiredRole) return NextResponse.next();

  const session = req.cookies.get(process.env.JWT_COOKIE_NAME || "session");
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // decode/verify role from session here, redirect to /403 if mismatched
  // For now, just check if session exists
  try {
    // If you have a role in the session, check it here
    // const sessionData = JSON.parse(session.value);
    // if (sessionData.role !== requiredRole) {
    //   return NextResponse.redirect(new URL("/403", req.url));
    // }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// ✅ Use named export for config (this is allowed)
export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};