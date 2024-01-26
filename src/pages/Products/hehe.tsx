// firebaseFunctions.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child, remove } from 'firebase/database';
import firebaseConfig from '../../../DataMethod';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// Kiem tra Product
function getProductLength() {
  const ProductRef = ref(db, '/__collections__');
  return get(child(ProductRef, 'SanPham'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const ProductList = snapshot.val();
        return Object.keys(ProductList).length;
      } else {
        return -1;
      }
    })
    .catch((error) => {
      console.error('Error getting Product count:', error);
      return -1;
    });
}
// Kiem tra Product
async function checkIfIdExists(id) {
  const ProductRef = ref(db, '/__collections__/SanPham');
  const snapshot = await get(child(ProductRef, `SanPham${id}`));

  if (!snapshot.exists()) {
    return id; // ID doesn't exist
  } else {
    return checkIfIdExists(id + 1); // Recursively check the next ID
  }
}

// Ghi dữ liệu
let productId;

async function writeProductData(name, giaBan, giaNhap, IDNCC, moTa, tonKho, image) {
  const length = await getProductLength();
  if (length < 0) {
    productId = 1;
  } else {
    productId = length + 1;
  }
  console.log('Truoc'+productId);
  const result = await checkIfIdExists(productId);
  productId = result;
  console.log('Sau'+productId);
  console.log('ID:' + productId);
  set(ref(db, `__collections__/SanPham/SanPham${productId}`), {
    ID: productId,
    GiaBan: giaBan,
    GiaNhap: giaNhap,
    MoTa: moTa,
    NhaCungCap: IDNCC,
    TenSP: name,
    TonKho: tonKho,
    Image: image,
  });
}

// Xóa dữ liệu
function deleteProductData(ProductId) {
  const ProductRef = ref(db, `__collections__/SanPham/SanPham${ProductId}`);
  // Sử dụng hàm remove để xóa dữ liệu
  remove(ProductRef)
    .then(() => {
      console.log(`Data for Product ${ProductId} has been deleted successfully.`);
    })
    .catch((error) => {
      console.error(`Error deleting data for Product ${ProductId}:`, error.message);
    });
}

// Sửa dữ liệu
function setProductData(giaBan, giaNhap, name, moTa, IDNCC) {
    set(ref(db, `__collections__/SanPham/SanPham${productId}`), {
        GiaBan: giaBan,
        GiaNhap: giaNhap,
        MoTa: moTa,
        NhaCungCap: IDNCC,
        TenSP: name,
    });
  }

export { productId, writeProductData, deleteProductData, setProductData };