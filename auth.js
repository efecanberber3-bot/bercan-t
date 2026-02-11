import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6vXTR-ABEPRI1P181lNXB-8SfLCG0SWY",
  authDomain: "bercant-fitness.firebaseapp.com",
  projectId: "bercant-fitness",
  storageBucket: "bercant-fitness.firebasestorage.app",
  messagingSenderId: "1087173244977",
  appId: "1:1087173244977:web:35e08a03cd786b43ee3d10",
  measurementId: "G-P427TKHZ4V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = async function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Giriş başarılı ✅");
    window.location.href = "takip.html";
  } catch (error) {
    alert("Hata: " + error.message);
  }
};

