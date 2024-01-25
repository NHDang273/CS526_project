// firebaseFunctions.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from 'firebase/database';
import firebaseConfig from '../../../../DataMethod';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

function getSupplierData() {
  return new Promise((resolve, reject) => {
    const nhaCungCapRef = ref(db, '/__collections__/NhaCungCap/');
    get(nhaCungCapRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const nhaCungCapData = snapshot.val();
          const nhaCungCapArray = Object.values(nhaCungCapData);
          resolve(nhaCungCapArray);
        } else {
          resolve([]);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { getSupplierData };

// getSupplierData()
//   .then((nhaCungCapArray) => {
//     console.log(nhaCungCapArray);
//     // Sử dụng mảng nhaCungCapArray ở đây
//   })
//   .catch((error) => {
//     console.error(error);
//   });