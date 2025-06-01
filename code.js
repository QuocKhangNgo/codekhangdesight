// // Thêm hiệu ứng scroll
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     }
//   });
// });

// document.querySelectorAll('.project').forEach(el => observer.observe(el));

// // Nền sao động
// const canvas = document.createElement('canvas');
// canvas.style.position = 'fixed';
// canvas.style.top = '0';
// canvas.style.left = '0';
// canvas.style.zIndex = '-1';
// document.body.appendChild(canvas);
// const ctx = canvas.getContext('2d');

// let stars = [];

// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   stars = Array.from({ length: 150 }, () => ({
//     x: Math.random() * canvas.width,
//     y: Math.random() * canvas.height,
//     r: Math.random() * 1.5 + 0.5,
//     dx: Math.random() * 0.3 - 0.15,
//     dy: Math.random() * 0.3 - 0.15,
//     color: Math.random() > 0.5 ? '#00ffff' : '#ff9500'
//   }));
// }
// window.addEventListener('resize', resizeCanvas);
// resizeCanvas();

// function animateStars() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   stars.forEach(s => {
//     ctx.beginPath();
//     ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
//     ctx.fillStyle = s.color;
//     ctx.fill();
//     s.x += s.dx;
//     s.y += s.dy;
//     if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
//     if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
//   });
//   requestAnimationFrame(animateStars);
// }
// animateStars();

// // Hiệu ứng Particle Burst cho Tabs
// const tabs = document.querySelectorAll('.tab');

// tabs.forEach(tab => {
//   tab.addEventListener('mouseover', (e) => {
//     const rect = tab.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     for (let i = 0; i < 20; i++) {
//       const particle = document.createElement('div');
//       particle.style.position = 'absolute';
//       particle.style.width = `${Math.random() * 5 + 2}px`;
//       particle.style.height = particle.style.width;
//       particle.style.background = Math.random() > 0.5 ? '#00ffff' : '#ff9500';
//       particle.style.borderRadius = '50%';
//       particle.style.left = `${x}px`;
//       particle.style.top = `${y}px`;
//       particle.style.pointerEvents = 'none';
//       tab.appendChild(particle);

//       const angle = Math.random() * Math.PI * 2;
//       const speed = Math.random() * 5 + 2;
//       const dx = Math.cos(angle) * speed;
//       const dy = Math.sin(angle) * speed;

//       let opacity = 1;
//       let px = x;
//       let py = y;
//       const animateParticle = () => {
//         const particleAnimation = setInterval(() => {
//           px += dx;
//           py += dy;
//           opacity -= 0.02;
//           particle.style.left = `${px}px`;
//           particle.style.top = `${py}px`;
//           particle.style.opacity = opacity;
//           if (opacity <= 0) {
//             clearInterval(particleAnimation);
//             particle.remove();
//           }
//         }, 20);
//       };
//       animateParticle();
//     }
//   });
// });