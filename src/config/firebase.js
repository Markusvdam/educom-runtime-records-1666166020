import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

/*
const firebaseConfig = {
  apiKey: "AIzaSyC9E1XX5eVcN6j8avMgXcGPaTZRODXpKjs",
  authDomain: "frontend-project-3401b.firebaseapp.com",
  projectId: "frontend-project-3401b",
  storageBucket: "frontend-project-3401b.appspot.com",
  messagingSenderId: "385311062675",
  appId: "1:385311062675:web:0fd3e702d7e85c018f6b66"
}
*/

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

console.log(process.env)

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getFirestore(app)


export { app, database }