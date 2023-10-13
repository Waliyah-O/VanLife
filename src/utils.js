import { redirect } from "react-router-dom";
// phew!
// hooks only works inside components

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!isLoggedIn) {
    const response = redirect(
      `/login?message=You must log in first!&redirectTo=${pathname}`
    );
    response.body = true;
    return response;
  }
  return null;
}

// export async function fakeLoginUser(creds) {
//   await sleep(1000);
//   if (creds.email === "c@t.com" && creds.password === "p123") {
//     localStorage.setItem("loggedIn", true);
//     return {
//       email: creds.email,
//       token: "123456789abcdef",
//     };
//   }
//   throw new Error("couldn't log the user in");
// }
