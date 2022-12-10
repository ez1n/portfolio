import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
//import { initializeApp } from "firebase/app";
//import { getDatabase } from "firebase/database";

//console.log(process.env.FIREBASE_API_KEY)

const firebaseConfig = {
  apiKey: "AIzaSyCFoetGSizXp7yJhWxZtEshf_e4Wwb06ck",
  databaseURL: "https://portfolio-ezin-default-rtdb.firebaseio.com",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);



