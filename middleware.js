import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/onboarding(.*)",
  "/organisation(.*)",
  "/project(.*)",
  "/issue(.*)",
  "/sprint(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (!auth().userId && isProtectedRoute(req)) {
    return auth().redirectToSignIn();
  }

  if (
    auth().userId &&
    !auth().orgId &&
    req.nextUrl.pathname !== "/onboarding" &&
    req.nextUrl.pathname !== "/"
  ) {
    // return NextResponse.redirect(new URL("/onboarding", req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};










// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher([
//   "/onboarding(.*)",
//   "/organisation(.*)",
//   "/project(.*)",
//   "/issue(.*)",
//   "/sprint(.*)",
// ]);

// // 👇 Add this new matcher
// const isOrgPage = createRouteMatcher([
//   "/organization(.*)", // Allow temporary access to organization routes
// ]);

// export default clerkMiddleware((auth, req) => {
//   const userId = auth().userId;
//   const orgId = auth().orgId;

//   // Redirect unauthenticated users away from protected routes
//   if (!userId && isProtectedRoute(req)) {
//     return auth().redirectToSignIn();
//   }

//   // 👇 Only redirect to onboarding if the user has no selected org
//   // AND they're not on onboarding or an org page
//   if (
//     userId &&
//     !orgId &&
//     !req.nextUrl.pathname.startsWith("/onboarding") &&
//     !isOrgPage(req) &&
//     req.nextUrl.pathname !== "/"
//   ) {
//     return NextResponse.redirect(new URL("/onboarding", req.url));
//   }

//   // Otherwise, allow the request to continue
// });
