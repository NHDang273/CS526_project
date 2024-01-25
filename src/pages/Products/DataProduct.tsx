// firebaseFunctions.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from 'firebase/database';
import firebaseConfig from '../../../DataMethod';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

function getProductData() {
  return new Promise((resolve, reject) => {
    const SanPhamRef = ref(db, '/__collections__/SanPham/');
    get(SanPhamRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const SanPhamData = snapshot.val();
          const SanPhamArray = Object.values(SanPhamData);
          resolve(SanPhamArray);
        } else {
          resolve([]);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { getProductData };

// getProductData()
//   .then((SanPhamArray) => {
//     console.log(SanPhamArray);
//     // Sử dụng mảng SanPhamArray ở đây
//   })
//   .catch((error) => {
//     console.error(error);
//   });