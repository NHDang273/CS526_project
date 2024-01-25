// firebaseFunctions.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child, remove } from 'firebase/database';
import firebaseConfig from '../../../DataMethod';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// Kiem tra user
function getTaiKhoanLength() {
  const taiKhoanRef = ref(db, '/__collections__');
  return get(child(taiKhoanRef, 'TaiKhoan'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const taiKhoanList = snapshot.val();
        return Object.keys(taiKhoanList).length;
      } else {
        return -1;
      }
    })
    .catch((error) => {
      console.error('Error getting taiKhoan count:', error);
      return -1;
    });
}

// Ghi dữ liệu
let user;

function writeUserData(email, password, vaitro, tennguoidung, tendangnhap, ngaytao) {
  getTaiKhoanLength().then((length) => {
    user = length + 1;
    console.log(user);
    set(ref(db, `/__collections__/TaiKhoan/User${user}`), {
      Email: email,
      MatKhau: password,
      NgayTao: ngaytao,
      TenDangNhap: tendangnhap,
      TenNguoiDung: tennguoidung,
      VaiTro: vaitro,
    });
  });
}

// Xóa dữ liệu
function deleteUserData(userId) {
  const userRef = ref(db, `/__collections__/TaiKhoan/User${userId}`);
  // Sử dụng hàm remove để xóa dữ liệu
  remove(userRef)
    .then(() => {
      console.log(`Data for user ${userId} has been deleted successfully.`);
    })
    .catch((error) => {
      console.error(`Error deleting data for user ${userId}:`, error.message);
    });
}

export { writeUserData, deleteUserData };