// import { useState } from "react";
// import { auth, googleProvider } from "../config/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";

// export const Auth = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   console.log(auth?.currentUser?.email)

//   const SignIn = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(auth, email, password);
//       console.log(user);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const SignInWithGoogle = async () => {
//     try {
//       const user = await signInWithPopup(auth, googleProvider);
//       console.log(user);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const Logout = async () => {
//     try {
//       const user = await signOut(auth);
//       console.log(user);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="email"
//         placeholder="Email...."
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password...."
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={SignIn}>SignIn</button>

//       <button onClick={SignInWithGoogle}>Sign In With Google</button>

//       <button onClick={Logout}>LogOut</button>
//     </div>
//   );
// };



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

  console.log(auth?.currentUser?.email);

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Authentication
        </h1>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sign In Button */}
        <button
          onClick={SignIn}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mb-4"
        >
          Sign In
        </button>

        {/* Google Sign In Button */}
        <button
          onClick={SignInWithGoogle}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors mb-4 flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            />
          </svg>
          Sign In With Google
        </button>

        {/* Logout Button */}
        <button
          onClick={Logout}
          className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};