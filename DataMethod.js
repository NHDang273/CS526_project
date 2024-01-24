//FireBase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFaW2EK3UDOpnuBN5PZcTgDeUUVRfLAho",
  authDomain: "quanly-290ff.firebaseapp.com",
  databaseURL: "https://quanly-290ff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quanly-290ff",
  storageBucket: "quanly-290ff.appspot.com",
  messagingSenderId: "1013329788432",
  appId: "1:1013329788432:web:e5e65666eeb0f6f7001495",
  measurementId: "G-M7LVGERCJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
//FireBase

//Ghi dữ liệu

function writeUserData(username, password) {
  const db = getDatabase();
  // Ghi dữ liệu bằng hàm set
  set(ref(db, 'TAIKHOAN'), {
    Email: username,
    Password: password
  });
}

//Xóa dữ liệu

function deleteUserData(userId) {
  const db = getDatabase();
  const userRef = ref(db, `TAIKHOAN/${userId}`);
  // Sử dụng hàm remove để xóa dữ liệu
  remove(userRef)
    .then(() => {
      console.log(`Data for user ${userId} has been deleted successfully.`);
    })
    .catch((error) => {
      console.error(`Error deleting data for user ${userId}:`, error.message);
    });
}

//Đọc dữ liệu
let emailValue = '';
function GETEmail() {
const emailRef = ref(db, 'TAIKHOAN/Email');
onValue(emailRef, (snapshot) => {
  emailValue = snapshot.val();
});
return emailValue;
}
export default  writeUserData;