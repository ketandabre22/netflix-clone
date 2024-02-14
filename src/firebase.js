// // firebase.js

// import { initializeApp } from "firebase/app";
// // import { getFirestore } from "firebase/firestore";
// // import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAkb8Zn49bvr2bsk60U1W79MPMIloYDvwQ",
//   authDomain: "netflix--clone1.firebaseapp.com",
//   projectId: "netflix--clone1",
//   storageBucket: "netflix--clone1.appspot.com",
//   messagingSenderId: "940223717028",
//   appId: "1:940223717028:web:634fc3e48348a2d0bb5031",
// };

// const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);
// const auth = getAuth(app);

// // export { auth };
// // export default db;

// export default app;

// firebase.js

// firebase.js

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { auth };
// export default db;




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/firestore";


 const firebaseConfig = {
  apiKey: "AIzaSyAkb8Zn49bvr2bsk60U1W79MPMIloYDvwQ",
  authDomain: "netflix--clone1.firebaseapp.com",
  projectId: "netflix--clone1",
  storageBucket: "netflix--clone1.appspot.com",
  messagingSenderId: "940223717028",
  appId: "1:940223717028:web:634fc3e48348a2d0bb5031",
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth };
  export { db };
  
export default firebaseApp