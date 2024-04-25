//Đăng nhập và đăng ký tài khoản 
document.addEventListener("DOMContentLoaded", function(){
    //đăng nhập
    var loginButton = document.querySelector(".btn");
    //đăng ký
    var registerButton = document.querySelector(".btn-active");

    //click nút Đăng nhập
    loginButton.addEventListener("click", function(event) {
        // Ngăn chặn mặc định 
        event.preventDefault();
        // Chuyển hướng trang sang "register.html"
        window.location.href = "login.html";
    })
    //click nút Đăng ký
    registerButton.addEventListener("click", function(event) {
        // Ngăn chặn mặc định 
        event.preventDefault();
        // Chuyển hướng trang sang "register.html"
        window.location.href = "register.html";
    })
});
//hàm tính hóa đơn
function Kq() {
    var a = document.getElementById("sl").value;
    var b, c;
    // Kiểm tra xem a đã được nhập hay chưa
    if (a.trim() === "") {
        document.getElementById("log").innerText = "Vui lòng nhập số lượng!";
        return; 
    }
    
    // Kiểm tra xem a có phải là số nguyên khác 0 không
    if (isNaN(a) || parseInt(a) !== parseFloat(a) || parseInt(a) === 0) {
        document.getElementById("log").innerText = "Vui lòng nhập số nguyên khác 0!";
        return;
    }

    // Tính phí VAT
    if (a <= 1) {
        b = 0.05 * 100; 
    } else if (a >= 2 && a <= 9) {
        b = 0.1 * 100; 
    } else {
        b = 0.2 * 100; 
    }

    // Tính phí vận chuyển
    if (a <= 1) {
        c = 0.01 * 100; 
    } else if (a >= 2 && a <= 9) {
        c = 0.05 * 100; 
    } else {
        c = 0.1 * 100; 
    }

    var s = parseFloat(a) * 100 + b + c; // Tổng hóa đơn
    document.getElementById("vat").value = b + "$"; // Hiển thị phí VAT
    document.getElementById("ship").value = c + "$"; // Hiển thị phí vận chuyển
    document.getElementById("Sum").value = s + "$"; // Hiển thị tổng hóa đơn
    document.getElementById("log").innerText = "";
}

function BUY(){
    // Kiểm tra xem đã tính tổng hóa đơn hay chưa
    var sumValue = document.getElementById("Sum").value;
    if (sumValue === "") {
        document.getElementById("log").innerText = "Vui lòng nhấn Kết quả trước khi mua!";
        return;
    }
    //nếu đã tính tổng hóa đơn
    document.getElementById("sl").value =null; 
    document.getElementById("vat").value =null; 
    document.getElementById("ship").value =null; 
    document.getElementById("Sum").value =null; 
    document.getElementById("log").innerText ="Mua thành công!";
}



