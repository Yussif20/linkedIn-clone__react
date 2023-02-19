import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBK_N4ApUgkaFuLS8be0mqP4xiZndOC4YU",
  authDomain: "linkedin-clone-e0fb6.firebaseapp.com",
  projectId: "linkedin-clone-e0fb6",
  storageBucket: "linkedin-clone-e0fb6.appspot.com",
  messagingSenderId: "648878362663",
  appId: "1:648878362663:web:bb5b7d01b0c5df03a07e02",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
export const db = getFirestore();

// collection ref
const colRef = collection(db, "books");

// get collection data
getDocs(colRef).then((snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});
