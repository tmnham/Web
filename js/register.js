document.addEventListener("DOMContentLoaded", function() {
    //input
    var inputs = document.querySelectorAll("input");
    var labels = document.querySelectorAll("label");
    //
    var form = document.querySelector("form");
    // nút "Đăng ký"
    var registerButton = form.querySelector(".btn-dk");
    //nút Reset
    var resetButton = document.querySelector(".btn-reset");

    //click vào input
    // Lặp input
    inputs.forEach(function(input) {
        // focus
        input.addEventListener("focus", function() {
            // Lặp qua từng label
            labels.forEach(function(label) {
                // Kiểm tra nếu label tương ứng với input hiện đang được focus
                if (label.getAttribute("for") === input.getAttribute("id")) {
                    // Ẩn label đi
                    label.style.display = "none";
                }
            });
        });

        // blur
        input.addEventListener("blur", function() {
            // Nếu input rỗng
            if (input.value.trim() === '') {
                // Lặp label
                labels.forEach(function(label) {
                    // Kiểm tra nếu label tương ứng với input
                    if (label.getAttribute("for") === input.getAttribute("id")) {
                        // Hiện label lên
                        label.style.display = "block";
                    }
                });
            }
        });
    });


    // click nút Đăng ký
    registerButton.addEventListener("click", function(event) {
        // Ngăn chặn mặc định
        event.preventDefault();

        // Lấy giá trị của các trường nhập liệu
        var username = form.querySelector("#username").value;
        var email = form.querySelector("#email").value;
        var password1 = form.querySelector("#pass1").value;
        var password2 = form.querySelector("#pass2").value;

        // Kiểm tra điều kiện cho đăng ký
        if (username.trim() === '' || email.trim() === '' || password1.trim() === '' || password2.trim() === '') {
            // Nếu thiếu thông tin, hiển thị thông báo
            alert("Vui lòng cung cấp đầy đủ thông tin.");
        } else if (username.length < 4) {
            // Kiểm tra tên đăng nhập có đủ dài không
            alert("Tên đăng nhập phải dài ít nhất 4 ký tự.");
        } else if (!validateEmail(email)) {
            // Kiểm tra định dạng email
            alert("Email không hợp lệ.");
        } else if (password1.length < 8) {
            // Kiểm tra độ dài mật khẩu
            alert("Mật khẩu phải dài ít nhất 8 ký tự.");
        } else if (password1 !== password2) {
            // Kiểm tra mật khẩu nhập lại có khớp với mật khẩu không
            alert("Mật khẩu nhập lại không khớp.");
        } else {
            // Nếu đủ điều kiện, chuyển hướng trang sang trang đăng ký
            alert("Đăng ký thành công!");
            window.location.href = "login.html";
        }
    });
    // Hàm kiểm tra định dạng email
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // click Reset
    resetButton.addEventListener("click", function(event) {
        // Ngăn chặn mặc định
        event.preventDefault();
        // Lặp và đặt giá trị của chúng về trống
        var inputFields = form.querySelectorAll("input[type=text], input[type=password]");
        inputFields.forEach(function(input) {
            input.value = "";
        });
    });
});

