// Thêm tương tác nếu cần, ví dụ: thông báo khi nhấp vào dự án
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    alert('Bạn đã nhấp vào ' + project.querySelector('h3').textContent);
  });
});

// Click effect
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    alert('Bạn đã nhấp vào ' + project.querySelector('h3').textContent);
  });
});

// Scroll effect (reveal)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.project').forEach(el => observer.observe(el));

// Background stars
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = '-1';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: Math.random() * 0.3 - 0.15,
    dy: Math.random() * 0.3 - 0.15
  }));
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.x += s.dx;
    s.y += s.dy;
    if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
    if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
  });
  requestAnimationFrame(animateStars);
}
animateStars();
