const dropArea1 = document.querySelector(".drag-area1");
const dragText1 = dropArea1.querySelector(".header_drag1");
const button1 = dropArea1.querySelector(".btn_drag1");
const input1 = dropArea1.querySelector(".inp_drag1");
let file1; // Biến toàn cục được sử dụng trong nhiều hàm

button1.onclick = () => {
  input1.click(); // Nếu người dùng nhấp vào nút, kích hoạt sự kiện click trên phần tử input
};

input1.addEventListener("change", function () {
  // Lấy file được chọn bởi người dùng, chỉ lấy file đầu tiên nếu người dùng chọn nhiều file
  file1 = this.files[0];
  dropArea1.classList.add("active1");
  showFile1(); // Gọi hàm để hiển thị file được chọn
});

// Nếu người dùng kéo một file qua vùng chứa (dropArea)
dropArea1.addEventListener("dragover", (event1) => {
  event1.preventDefault(); // Ngăn chặn hành vi mặc định
  dropArea1.classList.add("active1");
  dragText1.textContent = "Thả để tải tệp lên";
});

// Nếu người dùng rời khỏi file đang kéo qua vùng chứa (dropArea)
dropArea1.addEventListener("dragleave", () => {
  dropArea1.classList.remove("active1");
  dragText1.textContent = "Kéo và thả để tải tệp lên";
});

// Nếu người dùng thả một file vào vùng chứa (dropArea)
dropArea1.addEventListener("drop", (event1) => {
  event1.preventDefault(); // Ngăn chặn hành vi mặc định
  // Lấy file được chọn bởi người dùng, chỉ lấy file đầu tiên nếu người dùng thả nhiều file
  file1 = event1.dataTransfer.files[0];
  showFile1(); // Gọi hàm để hiển thị file đã thả
});

function showFile1() {
  let fileType1 = file1.type; // Lấy loại file được chọn
  let validExtensions1 = ["image/jpeg", "image/jpg", "image/png"]; // Mảng các đuôi file hợp lệ
  if (validExtensions1.includes(fileType1)) {
    // Nếu file được chọn là file hình ảnh
    let fileReader1 = new FileReader(); // Tạo một đối tượng FileReader mới
    fileReader1.onload = () => {
      let fileURL1 = fileReader1.result; // Lấy đường dẫn file được chọn
      let imgTag1 = `<img src="${fileURL1}" alt="">`; // Tạo thẻ img và đặt đường dẫn file được chọn làm giá trị src
      dropArea1.innerHTML = imgTag1; // Thêm thẻ img đã t
    };
    fileReader1.readAsDataURL(file1);
  } else {
    alert("This is not an Image File!");
    dropArea1.classList.remove("active1");
    dragText1.textContent = "Drag & Drop to Upload File";
  }
}
