const dropArea2 = document.querySelector(".drag-area2");
const dragText2 = dropArea2.querySelector(".header_drag2");
const button2 = dropArea2.querySelector(".btn_drag2");
const input2 = dropArea2.querySelector(".inp_drag2");
let file2; // Biến toàn cục được sử dụng trong nhiều hàm

button2.onclick = () => {
  input2.click(); // Nếu người dùng nhấp vào nút, kích hoạt sự kiện click trên phần tử input
};

input2.addEventListener("change", function () {
  // Lấy file được chọn bởi người dùng, chỉ lấy file đầu tiên nếu người dùng chọn nhiều file
  file2 = this.files[0];
  dropArea2.classList.add("active");
  showFile2(); // Gọi hàm để hiển thị file được chọn
});

// Nếu người dùng kéo một file qua vùng chứa (dropArea)
dropArea2.addEventListener("dragover", (event2) => {
  event2.preventDefault(); // Ngăn chặn hành vi mặc định
  dropArea2.classList.add("active");
  dragText2.textContent = "Thả để tải tệp lên";
});

// Nếu người dùng rời khỏi file đang kéo qua vùng chứa (dropArea)
dropArea2.addEventListener("dragleave", () => {
  dropArea2.classList.remove("active");
  dragText2.textContent = "Kéo và thả để tải tệp lên";
});

// Nếu người dùng thả một file vào vùng chứa (dropArea)
dropArea2.addEventListener("drop", (event2) => {
  event2.preventDefault(); // Ngăn chặn hành vi mặc định
  // Lấy file được chọn bởi người dùng, chỉ lấy file đầu tiên nếu người dùng thả nhiều file
  file2 = event2.dataTransfer.files[0];
  showFile2(); // Gọi hàm để hiển thị file đã thả
});

function showFile2() {
  let fileType2 = file2.type; // Lấy loại file được chọn
  let validExtensions2 = ["image/jpeg", "image/jpg", "image/png"]; // Mảng các đuôi file hợp lệ
  if (validExtensions2.includes(fileType2)) {
    // Nếu file được chọn là file hình ảnh
    let fileReader2 = new FileReader(); // Tạo một đối tượng FileReader mới
    fileReader2.onload = () => {
      let fileURL2 = fileReader2.result; // Lấy đường dẫn file được chọn
      let imgTag2 = `<img src="${fileURL2}" alt="">`; // Tạo thẻ img và đặt đường dẫn file được chọn làm giá trị src
      dropArea2.innerHTML = imgTag2; // Thêm thẻ img đã tạo vào trong vùng chứa (dropArea)
    };
    fileReader2.readAsDataURL(file2);
  } else {
    alert("Đây không phải là file hình ảnh");
    dropArea2.classList.remove("active");
    dragText2.textContent = "Drag & Drop to Upload File";
  }
}
