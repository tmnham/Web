document.addEventListener("DOMContentLoaded", function() {
    //eye
    var eyeIcon = document.getElementById("eye");
    var passwordInput = document.getElementById("pass1");
    //đăng nhập
    var loginButton = document.querySelector(".btn-dn");
    //đăng ký
    var registerButton = document.querySelector(".btn-dk");

    //click cho biểu tượng mắt
    eyeIcon.addEventListener("click", function() {
        if (passwordInput.type === "password") {
            // Hiển thị mật khẩu
            passwordInput.type = "text";
            // Thay đổi biểu tượng mắt
            eyeIcon.querySelector("i").classList.remove("bx-low-vision");
            eyeIcon.querySelector("i").classList.add("bx-show");
        } else {
            // Ẩn mật khẩu
            passwordInput.type = "password";
            // Thay đổi biểu tượng mắt
            eyeIcon.querySelector("i").classList.remove("bx-show");
            eyeIcon.querySelector("i").classList.add("bx-low-vision");
        }
    });

    // click nút đăng nhập
    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn mặc định 

        // input
        var username = document.getElementById("username").value;
        var password = passwordInput.value;
        // Kiểm tra xem người dùng đã nhập đủ thông tin hay chưa
        if (username.trim() === '' || password.trim() === '') {
            // Nếu thiếu thông tin, hiển thị thông báo
            alert("Vui lòng cung cấp đầy đủ thông tin.");
        } else {
            // Nếu có đủ thông tin, hiển thị thông báo đăng nhập thành công
            alert("Đăng nhập thành công!");
        }
    });
    
    //click nút Đăng ký
    registerButton.addEventListener("click", function(event) {
        // Ngăn chặn mặc định 
        event.preventDefault();
        // Chuyển hướng trang sang "register.html"
        window.location.href = "register.html";
    });
});
