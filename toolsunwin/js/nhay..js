let intervalId;
let isProcessing = false; // Biến kiểm tra trạng thái sự kiện

document.getElementById("toggleButton").addEventListener("click", function() {
    if (isProcessing) return; // Nếu đang xử lý, không cho phép nhấn lại

    // Đặt trạng thái đang xử lý
    isProcessing = true;

    // Chọn ngẫu nhiên 1 trong 2 hình tròn
    const randomCircle = Math.random() < 0.5 ? 'circle1' : 'circle2';
    const circle = document.getElementById(randomCircle);

    // Hiệu ứng nháy mờ
    let isOpaque = true;  // Biến để kiểm tra độ mờ
    const endTime = Date.now() + 4000; // 4 giây
    intervalId = setInterval(function() {
        if (Date.now() > endTime) {
            clearInterval(intervalId); // Dừng nháy sau 4 giây
            circle.style.opacity = 1; // Quay lại độ mờ ban đầu

            // Đặt trạng thái lại sau khi hoàn thành
            isProcessing = false;
        } else {
            // Chuyển đổi giữa mờ và rõ
            isOpaque = !isOpaque;
            circle.style.opacity = isOpaque ? 1 : 0.2; // Độ mờ (0.2 là mờ)
        }
    }, 300); // Nháy mỗi 300ms

    // Tạo tỷ lệ phần trăm ngẫu nhiên cho "Tài" hoặc "Xỉu"
    const randomPercentage = Math.floor(Math.random() * 101); // Tạo số ngẫu nhiên từ 0 đến 100
    const percentDisplay = document.getElementById("percentDisplay");

    // Hiển thị tỷ lệ phần trăm cho Tài hoặc Xỉu
    if (randomCircle === 'circle1') {
        percentDisplay.textContent = `Tool Báo Tài: ${randomPercentage}%`; // Hiển thị tỷ lệ cho Tài
    } else {
        percentDisplay.textContent = `Tool Báo Xỉu: ${randomPercentage}%`; // Hiển thị tỷ lệ cho Xỉu
    }
});