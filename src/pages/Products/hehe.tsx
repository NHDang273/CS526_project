// // firebaseFunctions.js
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, set, get, child, remove } from 'firebase/database';
// import firebaseConfig from '../../../DataMethod';

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getDatabase();

// // Kiem tra Product
// function getProductLength() {
//   const ProductRef = ref(db, '/__collections__');
//   return get(child(ProductRef, 'SanPham'))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         const ProductList = snapshot.val();
//         return Object.keys(ProductList).length;
//       } else {
//         return -1;
//       }
//     })
//     .catch((error) => {
//       console.error('Error getting Product count:', error);
//       return -1;
//     });
// }

// // Ghi dữ liệu
// let Product;
// let id;

// function writeProductData(id, name, giaBan, giaNhap, IDNCC, moTa) {
//   getProductLength().then((length) => {
//     if(length < 1)
//         Product = 1;
//     Product = length+1;
//     id = Product,
//     console.log('SanPham'+Product);
//     console.log('ID:'+id);
//     set(ref(db, `__collections__/SanPham/SanPham${Product}`), {
//       ID: id,
//       GiaBan: giaBan,
//       GiaNhap: giaNhap,
//       MoTa: moTa,
//       NhaCungCap: IDNCC,
//       TenSP: name,
//     });
//   });
// }

// // Xóa dữ liệu
// function deleteProductData(ProductId) {
//   const ProductRef = ref(db, `__collections__/SanPham/SanPham${ProductId}`);
//   // Sử dụng hàm remove để xóa dữ liệu
//   remove(ProductRef)
//     .then(() => {
//       console.log(`Data for Product ${ProductId} has been deleted successfully.`);
//     })
//     .catch((error) => {
//       console.error(`Error deleting data for Product ${ProductId}:`, error.message);
//     });
// }

// // Sửa dữ liệu
// function setProductData(giaBan, giaNhap, name, moTa, IDNCC) {
//     set(ref(db, `__collections__/SanPham/SanPham${Product}`), {
//         GiaBan: giaBan,
//         GiaNhap: giaNhap,
//         MoTa: moTa,
//         NhaCungCap: IDNCC,
//         TenSP: name,
//     });
//   }

// export { id, writeProductData, deleteProductData, setProductData };