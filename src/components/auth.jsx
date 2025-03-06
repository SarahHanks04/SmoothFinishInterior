import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email)

  const SignIn = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const SignInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, googleProvider);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const Logout = async () => {
    try {
      const user = await signOut(auth);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email...."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password...."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={SignIn}>SignIn</button>

      <button onClick={SignInWithGoogle}>Sign In With Google</button>

      <button onClick={Logout}>LogOut</button>
    </div>
  );
};
