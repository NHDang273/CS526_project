function getDate(): string {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Tháng trong JavaScript được đánh số từ 0 đến 11
  const year = String(currentDate.getFullYear());

  return `${day}/${month}/${year}`;
}

// Sử dụng hàm để lấy ngày hiện tại dưới dạng chuỗi
const currentDate = getDate();
  export {currentDate};