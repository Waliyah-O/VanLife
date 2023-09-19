import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between sign-up and sign-in

  const auth = getAuth();

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        // Sign up a new user
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // Sign in an existing user
        await signInWithEmailAndPassword(auth, email, password);
      }
      // Authentication successful, you can redirect or perform other actions here
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  return (
    <div>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>{isSignUp ? "Sign Up" : "Sign In"}</button>
      <p onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp
          ? "Already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
}

export default AuthPage;
