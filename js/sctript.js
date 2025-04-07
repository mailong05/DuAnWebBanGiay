function checkName(name) {
    return /^[A-Za-zÀ-Ỹà-ỹ\s]+$/.test(name.trim());
}
function checkPhone(phone) {
    return /^(0\d{9})$/.test(phone.trim());
}
function checkEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
}

// Kiểm tra tên khi nhập
function validateName() {
    const name = document.getElementById("nameSignIn").value;
    const message1 = document.getElementById("message1");
    if (checkName(name)) {
        message1.textContent = "✔ Tên hợp lệ 😊";
        message1.style.color = "green";
    } else {
        message1.textContent = "✖ Tên không hợp lệ ☹️";
        message1.style.color = "red";
    }
}

// Kiểm tra số điện thoại khi nhập
function validatePhone() {
    const phone = document.getElementById("phoneSignIn").value;
    const message2 = document.getElementById("message2");
    if (checkPhone(phone)) {
        message2.textContent = "✔ Số điện thoại hợp lệ 😊";
        message2.style.color = "green";
    } else {
        message2.textContent = "✖ Số điện thoại không hợp lệ ☹️";
        message2.style.color = "red";
    }
}

// Kiểm tra email khi nhập
function validateEmail() {
    const email = document.getElementById("emailSignIn").value;
    const message3 = document.getElementById("message3");
    if (checkEmail(email)) {
        message3.textContent = "✔ Email hợp lệ 😊";
        message3.style.color = "green";
    } else {
        message3.textContent = "✖ Email không hợp lệ ☹️";
        message3.style.color = "red";
    }
}
// Kiếm tra Input cho modal SignUp
function checkInput() {
    const name = document.getElementById("nameSignIn").value;
    const phone = document.getElementById("phoneSignIn").value;
    const email = document.getElementById("emailSignIn").value;

    validateName();
    validatePhone();
    validateEmail();

    if (!checkName(name) || !checkEmail(email) || !checkPhone(phone)) {
        alert("Vui lòng nhập thông tin hợp lệ!");
        return false;
    }
    alert("Đăng nhập thành công!");
    let modal = document.getElementById("modalSignIn");
    let modalInstance = bootstrap.Modal.getInstance(modal);
    if (modalInstance)
        modalInstance.hide();
    resetModal();
    return true;
}

// Hàm reset dữ liệu form modal
function resetModal() {
    document.getElementById("nameSignIn").value = "";
    document.getElementById("phoneSignIn").value = "";
    document.getElementById("emailSignIn").value = "";

    document.getElementById("message1").textContent = "";
    document.getElementById("message2").textContent = "";
    document.getElementById("message3").textContent = "";
}

// Check form đăng ký
// Kiểm tra giá trị Tên của modal SignUp
function validateSignUpName() {
    const name = document.getElementById("nameSignUp").value;
    const message1 = document.getElementById("messageSignUp1");
    if (checkName(name)) {
        message1.textContent = "✔ Tên hợp lệ 😊";
        message1.style.color = "green";
    } else {
        message1.textContent = "✖ Tên không hợp lệ ☹️";
        message1.style.color = "red";
    }
}
// Kiểm tra giá trị Số điện thoại của modal SignUp
function validateSignUpPhone() {
    const phone = document.getElementById("phoneSignUp").value;
    const message2 = document.getElementById("messageSignUp2");
    if (checkPhone(phone)) {
        message2.textContent = "✔ Số điện thoại hợp lệ 😊";
        message2.style.color = "green";
    } else {
        message2.textContent = "✖ Số điện thoại không hợp lệ ☹️";
        message2.style.color = "red";
    }
}

// Kiểm tra email khi nhập
function validateSignUpEmail() {
    const email = document.getElementById("emailSignUp").value;
    const message3 = document.getElementById("messageSignUp3");
    if (checkEmail(email)) {
        message3.textContent = "✔ Email hợp lệ 😊";
        message3.style.color = "green";
    } else {
        message3.textContent = "✖ Email không hợp lệ ☹️";
        message3.style.color = "red";
    }
}

// Kiếm tra Input cho modal SignUp
function checkSignUpInput() {
    const name = document.getElementById("nameSignUp").value;
    const phone = document.getElementById("phoneSignUp").value;
    const email = document.getElementById("emailSignUp").value;

    validateSignUpName();
    validateSignUpPhone();
    validateSignUpEmail();

    if (!checkName(name) || !checkEmail(email) || !checkPhone(phone)) {
        alert("Vui lòng nhập thông tin hợp lệ!");
        return false;
    }
    alert("Đăng ký thành công!");
    let modal = document.getElementById("modalSignUp");
    let modalInstance = bootstrap.Modal.getInstance(modal);
    if (modalInstance)
        modalInstance.hide();
    resetSignUpModal();
    return true;
}

// Hàm reset dữ liệu form modal
function resetSignUpModal() {
    document.getElementById("nameSignUp").value = "";
    document.getElementById("phoneSignUp").value = "";
    document.getElementById("emailSignUp").value = "";

    document.getElementById("messageSignUp1").textContent = "";
    document.getElementById("messageSignUp2").textContent = "";
    document.getElementById("messageSignUp3").textContent = "";
}

function toggleSearchBox(event) {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài

    let searchBox = document.getElementById("searchBox");
    if (!searchBox) {
        console.error("Element #searchBox not found!");
        return;
    }

    // Toggle hiển thị
    searchBox.style.display = (searchBox.style.display === "none" || searchBox.style.display === "") ? "block" : "none";
}

// Đóng hộp tìm kiếm khi click bên ngoài
document.addEventListener("click", function (event) {
    let searchBox = document.getElementById("searchBox");
    let searchButton = document.querySelector(".bi-search"); // Nút tìm kiếm

    if (!searchBox.contains(event.target) && !searchButton.contains(event.target)) {
        searchBox.style.display = "none";
    }
});


// Ẩn hộp tìm kiếm khi click ra ngoài
document.addEventListener("click", function (event) {
    let searchBox = document.getElementById("searchBox");
    let searchButton = document.querySelector(".bi-search").parentElement; // Lấy button chứa icon

    if (!searchBox.contains(event.target) && event.target !== searchButton) {
        searchBox.style.display = "none";
    }
});

// // Mảng lưu giỏ hàng
// let cart = [];

// // Hàm hiển thị thông báo
// function showNotification(message) {
//     let notification = document.getElementById("cart-notification");
//     notification.textContent = message;
//     notification.classList.remove("d-none");
//     setTimeout(() => notification.classList.add("d-none"), 2000);
// }

// // Hàm thêm sản phẩm vào giỏ
// function addToCart(productName, price) {
//     let existingItem = cart.find(item => item.name === productName);
//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push({ name: productName, price: price, quantity: 1 });
//     }
//     updateCartUI();
//     showNotification("Đã thêm vào giỏ hàng!");
// }

// // Hàm cập nhật giao diện giỏ hàng
// function updateCartUI() {
//     let cartList = document.getElementById("cart-items");
//     let cartTable = document.getElementById("cart-table");
//     let cartEmptyMessage = document.getElementById("cart-empty-message");

//     cartList.innerHTML = ""; // Xóa danh sách cũ

//     if (cart.length === 0) {
//         cartTable.classList.add("d-none"); // Ẩn bảng nếu giỏ hàng trống
//         cartEmptyMessage.classList.remove("d-none"); // Hiện thông báo "Giỏ hàng trống"
//     } else {
//         cartTable.classList.remove("d-none");
//         cartEmptyMessage.classList.add("d-none");

//         cart.forEach((item, index) => {
//             let row = document.createElement("tr");
//             row.innerHTML = `
//                 <td>${item.name}</td>
//                 <td>${new Intl.NumberFormat('vi-VN').format(item.price)}₫</td>
//                 <td>
//                     <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${index}, -1)">-</button>
//                     ${item.quantity}
//                     <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${index}, 1)">+</button>
//                 </td>
//                 <td>${new Intl.NumberFormat('vi-VN').format(item.price * item.quantity)}₫</td>
//             `;
//             cartList.appendChild(row);
//         });
//     }
// }

// // Hàm thay đổi số lượng sản phẩm
// function changeQuantity(index, amount) {
//     cart[index].quantity += amount;
//     if (cart[index].quantity <= 0) {
//         cart.splice(index, 1); // Xóa sản phẩm nếu số lượng <= 0
//     }
//     updateCartUI();
// }

// // Bắt sự kiện khi nhấn vào nút "Thêm vào giỏ"
// document.querySelectorAll(".add-to-cart").forEach((icon) => {
//     icon.addEventListener("click", function () {
//         let productName = this.dataset.name;
//         let price = parseInt(this.dataset.price);
//         addToCart(productName, price);
//     });
// });

// Mảng lưu giỏ hàng
let cart = [];

// Hàm hiển thị thông báo
function showNotification(message) {
    let notification = document.getElementById("cart-notification");
    notification.textContent = message;
    notification.classList.remove("d-none");
    setTimeout(() => notification.classList.add("d-none"), 2000);
}

// Hàm thêm sản phẩm vào giỏ
function addToCart(productName, price) {
    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    updateCartUI();
    showNotification("Đã thêm vào giỏ hàng!");
}

// Hàm cập nhật giao diện giỏ hàng
function updateCartUI() {
    let cartList = document.getElementById("cart-items");
    let cartTable = document.getElementById("cart-table");
    let cartEmptyMessage = document.getElementById("cart-empty-message");
    let checkoutContainer = document.getElementById("checkout-container"); // Thêm container của nút thanh toán

    cartList.innerHTML = ""; // Xóa danh sách cũ

    if (cart.length === 0) {
        cartTable.classList.add("d-none"); // Ẩn bảng nếu giỏ hàng trống
        cartEmptyMessage.classList.remove("d-none"); // Hiện thông báo "Giỏ hàng trống"
        checkoutContainer.classList.add("d-none"); // Ẩn nút thanh toán
    } else {
        cartTable.classList.remove("d-none");
        cartEmptyMessage.classList.add("d-none");
        checkoutContainer.classList.remove("d-none"); // Hiện nút thanh toán khi có sản phẩm

        cart.forEach((item, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${new Intl.NumberFormat('vi-VN').format(item.price)}₫</td>
                <td>
                    <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${index}, -1)">-</button>
                    ${item.quantity}
                    <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${index}, 1)">+</button>
                </td>
                <td>${new Intl.NumberFormat('vi-VN').format(item.price * item.quantity)}₫</td>
            `;
            cartList.appendChild(row);
        });
    }
}

// Hàm thay đổi số lượng sản phẩm
function changeQuantity(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); // Xóa sản phẩm nếu số lượng <= 0
    }
    updateCartUI();
}

// Bắt sự kiện khi nhấn vào nút "Thêm vào giỏ"
document.querySelectorAll(".add-to-cart").forEach((icon) => {
    icon.addEventListener("click", function () {
        let productName = this.dataset.name;
        let price = parseInt(this.dataset.price);
        addToCart(productName, price);
    });
});

