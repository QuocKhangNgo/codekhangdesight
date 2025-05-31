// Thêm tương tác nếu cần, ví dụ: thông báo khi nhấp vào dự án
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    alert('Bạn đã nhấp vào ' + project.querySelector('h3').textContent);
  });
});