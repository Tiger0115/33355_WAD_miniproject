// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcsGK2yKqRn_N1_FM7JQw8Q-gTWMyTEVs",
    authDomain: "med-stock-11e07.firebaseapp.com",
    projectId: "med-stock-11e07",
    storageBucket: "med-stock-11e07.appspot.com",
    messagingSenderId: "886665738996",
    appId: "1:886665738996:web:3b977ef58134613e3c7ca1",
    measurementId: "G-R5L54Z4Z3Q"
  };







// import React, { useState } from "react";
// import { firebase } from "./firebase";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       await firebase.auth().createUserWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await firebase.auth().signOut();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       {firebase.auth().currentUser ? (
//         <div>
//           <h1>Welcome, {firebase.auth().currentUser.email}!</h1>
//           <button onClick={handleSignOut}>Sign Out</button>
//         </div>
//       ) : (
//         <div>
//           <form onSubmit={handleSignIn}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Sign In</button>
//           </form>
//           <form onSubmit={handleSignUp}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Sign Up</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;