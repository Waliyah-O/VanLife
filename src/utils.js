import { redirect } from "react-router-dom";
// phew!
// hooks only works inside components 

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem("loggedIn")

  if (!isLoggedIn) {
    const response = redirect("/login?message=You must log in first!");
    response.body = true;
    return response;
  }
  return null;
}
