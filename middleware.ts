import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { server } from "./static/links";
import { deleteCookie } from "cookies-next";

export async function middleware(request: NextRequest) {
  // Access request object (req)
  const exist = request.cookies.get("AccessToken");
  if (!exist) {
    if (
      request.nextUrl.pathname !== "/" &&
      request.nextUrl.pathname !== "/forgetpassword" &&
      request.nextUrl.pathname !== "/changepassword" &&
      request.nextUrl.pathname !== "/verifyemail"
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  try {
    const response = await fetch(server, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${exist!["value"]}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (
        response.status === 401 &&
        request.nextUrl.pathname !== "/" &&
        request.nextUrl.pathname !== "/forgetpassword" &&
        request.nextUrl.pathname !== "/changepassword" &&
        request.nextUrl.pathname !== "/verifyemail"
      ) {
        deleteCookie("AccessToken");
        return NextResponse.redirect(new URL("/", request.url));
      } else if (
        response.status !== 401 &&
        (request.nextUrl.pathname === "/" ||
          request.nextUrl.pathname === "/forgetpassword" ||
          request.nextUrl.pathname === "/changepassword" ||
          request.nextUrl.pathname === "/verifyemail")
      ) {
        return NextResponse.redirect(new URL("/home", request.url));
      }
      console.error("Error:", response.statusText);
    } else {
      if (
        response.status !== 401 &&
        (request.nextUrl.pathname === "/" ||
          request.nextUrl.pathname === "/forgetpassword" ||
          request.nextUrl.pathname === "/changepassword" ||
          request.nextUrl.pathname === "/verifyemail")
      ) {
        return NextResponse.redirect(new URL("/home", request.url));
      }
      const data = await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
  //   console.log(localStorage.getItem("token"));
  //   // Modify request or response here
  //   if (url.pathname === '/login') {
  //     const user = req.cookies.get('user');
  //     if (user) {
  //       // User is already logged in, redirect to dashboard
  //       return NextResponse.redirect(new URL('/dashboard', req.url));
  //     }
  //   }
}
export const config = {
  matcher: [
    "/",
    "/home",
    "/forgetpassword",
    "/changepassword",
    "/home/pm",
    "/home/pm/tasks",
  ],
};
