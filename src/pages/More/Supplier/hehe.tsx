// firebaseFunctions.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child, remove } from 'firebase/database';
import firebaseConfig from '../../../../DataMethod';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// Kiem tra Supplier
function getSupplierLength() {
  const SupplierRef = ref(db, '/__collections__');
  return get(child(SupplierRef, 'NhaCungCap'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const SupplierList = snapshot.val();
        return Object.keys(SupplierList).length;
      } else {
        return -1;
      }
    })
    .catch((error) => {
      console.error('Error getting Supplier count:', error);
      return -1;
    });
}

// Ghi dữ liệu
let Supplier;
let id;

function writeSupplierData(id, name, address, phoneNumber, email) {
  getSupplierLength().then((length) => {
    if(length < 1)
        Supplier = 1;
    Supplier = length+1;
    id = Supplier,
    console.log('NhaCungCap'+Supplier);
    console.log('ID:'+id);
    set(ref(db, `__collections__/NhaCungCap/NhaCungCap${Supplier}`), {
      ID: id,
      DiaChi: address,
      Email: email,
      SoDienThoai: phoneNumber,
      TenNhaCungCap: name,
    });
  });
}

// Xóa dữ liệu
function deleteSupplierData(SupplierId) {
  const SupplierRef = ref(db, `__collections__/NhaCungCap/NhaCungCap${SupplierId}`);
  // Sử dụng hàm remove để xóa dữ liệu
  remove(SupplierRef)
    .then(() => {
      console.log(`Data for Supplier ${SupplierId} has been deleted successfully.`);
    })
    .catch((error) => {
      console.error(`Error deleting data for Supplier ${SupplierId}:`, error.message);
    });
}

// Sửa dữ liệu
function setSupplierData(name, address, phoneNumber, email) {
    set(ref(db, `__collections__/NhaCungCap/NhaCungCap${Supplier}`), {
    DiaChi: address,
    Email: email,
    SoDienThoai: phoneNumber,
    TenNhaCungCap: name,
    });
  }

export { id, writeSupplierData, deleteSupplierData, setSupplierData };