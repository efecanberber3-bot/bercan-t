import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "BURAYA_KENDI_API_KEY",
  authDomain: "bercant-fitness.firebaseapp.com",
  projectId: "bercant-fitness",
  storageBucket: "bercant-fitness.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = async function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "takip.html";
  } catch (error) {
    alert("Giriş başarısız");
  }
};

window.logout = function(){
  signOut(auth);
  window.location.href = "login.html";
};
