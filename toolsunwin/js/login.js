// Danh sách mã key hợp lệ với thời gian gia hạn khác nhau (theo mili giây)
const keyExpirationTimes = {
    "KEY1234": 24 * 60 * 60 * 1000, // 24 giờ
    "ABC5678": 48 * 60 * 60 * 1000, // 48 giờ 
    "XYZ9876": 72 * 60 * 60 * 1000  // 72 giờ
};

const checkButton = document.getElementById('checkButton');
const keyInput = document.getElementById('keyInput');
const message = document.getElementById('message');

// Hàm kiểm tra key và thông báo
function checkKeyValidity() {
    const key = keyInput.value.trim().toUpperCase(); // Chuyển mã nhập vào thành chữ in hoa

    // Kiểm tra nếu key hợp lệ
    if (keyExpirationTimes[key]) {
        const usedKeyTime = localStorage.getItem(`usedKeyTime_${key}`);
        const currentTime = new Date().getTime();
        const expirationTime = keyExpirationTimes[key]; // Lấy thời gian hết hạn từ keyExpirationTimes

        if (usedKeyTime) {
            const timePassed = currentTime - usedKeyTime;

            // Kiểm tra nếu thời gian sử dụng key đã quá hạn
            if (timePassed < expirationTime) {
                message.textContent = `Key Hợp Lệ Còn Hạn❤️`;
                message.style.color = 'green';
                
                // Chuyển trang sau khi key còn hạn
                setTimeout(function() {
                    window.location.href = "menugame.html"; // Đổi URL tới trang bạn muốn chuyển đến
                }, 3000); // Chờ 3 giây trước khi chuyển trang
            } else {
                // Nếu hết hạn, xóa thời gian sử dụng cũ và thông báo key không còn tác dụng
                localStorage.removeItem(`usedKeyTime_${key}`);
                message.textContent = `Key Đã Hết Hạn Liên Hệ Admin Để Mua Thêm Key !!!`;
                message.style.color = 'red';
            }
        } else {
            // Nếu key chưa bao giờ được sử dụng, lưu lại thời gian sử dụng
            localStorage.setItem(`usedKeyTime_${key}`, currentTime);
            message.textContent = `Key Hợp Lệ Sử Dụng Lần Đầu`;
            message.style.color = 'green';

            // Chuyển trang sau khi key hợp lệ
            setTimeout(function() {
                window.location.href = "menugame.html"; // Đổi URL tới trang bạn muốn chuyển đến
            }, 3000); // Chờ 3 giây trước khi chuyển trang
        }
    } else {
        message.textContent = 'Key Không Hợp Lệ !!!';
        message.style.color = 'red';
    }
}

// Lắng nghe sự kiện nhấn nút kiểm tra key
checkButton.addEventListener('click', checkKeyValidity);