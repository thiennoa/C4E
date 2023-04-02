// bài 3




// // Lấy tất cả các nút "Xóa" trong bảng
// var deleteBtns = document.querySelectorAll('.click-delete');

// // // Lặp qua từng nút "Xóa" và thêm sự kiện click
// deleteBtns.forEach(function(btn) {
//   btn.addEventListener('click', function() {
//     // Tìm phần tử cha của nút "Xóa"
//     var parent = btn.parentNode;
    
//     // Kiểm tra xem phần tử cha có phải là một hàng trong bảng hay không
//     if (parent.tagName.toLowerCase() === 'tr') {
//       // Nếu là một hàng trong bảng, xóa phần tử cha
//       parent.parentNode.removeChild(parent);
//     }
//   });
// });


// cách dùng for if
// Lấy tất cả các nút "Xóa" trong bảng
var deleteBtns = document.querySelectorAll('.click-delete');

// Lặp qua từng nút "Xóa" và thêm sự kiện click
for (var i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click', function() {
    // Tìm phần tử cha của nút "Xóa"
    var parent = this.parentNode;
    
    // Kiểm tra xem phần tử cha có phải là một hàng trong bảng hay không
    if (parent.tagname.toLowerCase() === 'tr') {
      // Nếu là một hàng trong bảng, xóa phần tử cha
      parent.parentNode.removeChild(parent);
    }
  });
}




// //cách 2
// // Lấy tất cả các nút "Xóa" trong bảng
// const $deleteBtns = document.querySelectorAll('.click-delete');

// // Lặp qua từng nút "Xóa" và thêm sự kiện click
// $deleteBtns.forEach(function(btn) {
//   btn.addEventListener('click', function() {
//     // Tìm phần tử cha (hàng) của nút "Xóa"
//     var row = btn.closest('tr');
    
//     // Xóa hàng khỏi bảng
//     row.remove();
//   });
// });



// // Lấy tất cả các nút "Xóa" trong bảng
// var deleteBtns = document.querySelectorAll('.delete-click');

// // Lặp qua từng nút "Xóa" và thêm sự kiện click
// deleteBtns.forEach(function(btn) {
//   btn.addEventListener('click', function() {
//     // Tìm phần tử cha (hàng) của nút "Xóa"
//     var row = btn.closest('tr');
    
//     // Xóa hàng khỏi bảng
//     row.remove();
//   });
// });


// bafi 4
var form = document.getElementById('myForm');
var submitBtn = document.getElementById('submit-btn');
//var message = document.getElementById('message');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Ngăn chặn form submit

  var name1 = document.getElementById('name-btn').value;
  var age1 = document.getElementById('age-btn').value;
  var address1 = document.getElementById('address-btn').value;
  var email1 = document.getElementById('email-btn').value;
  var password1 = document.getElementById('password-btn').value;

  if (name1 === '' || email1 === '' || password1 === '' || address1===""|| age1==="") {
    message.textContent = 'Nhập đầy đủ thông tin';
  } else {
    message.textContent = 'Đăng ký thành công';
    form.reset(); // Xóa nội dung các trường nhập liệu
  }
});