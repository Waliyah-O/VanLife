import React, { useState } from "react";
// import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("passwords does not match");
      }
    }
  };

  // const handleSignUp = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const { user } = await auth.createUserWithEmailAndPassword(
  //       email,
  //       password
  //     );

  //     // Save user data to Firestore
  //     await firestore.collection("users").doc(user.uid).set({
  //       email: user.email,
  //     });

  //     // Sign-up successful
  //     alert("Sign-up successful");
  //   } catch (error) {
  //     console.error("Error signing up:", error.message);
  //   }
  // };

  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      //create new user with email and password
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={register} name="registration-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

// import React, { useState } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );

//       // Save user data to Firestore
//       await firestore.collection("users").doc(user.uid).set({
//         email: user.email,
//       });

//       // Sign-up successful
//       alert("Sign-up successful");
//     } catch (error) {
//       console.error("Error signing up:", error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
