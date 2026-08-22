const card = document.querySelector('.card');

// Hiệu ứng nghiêng khung theo chuyển động chuột (Tilt Effect)
document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Trở về vị trí cũ khi chuột rời khỏi màn hình
document.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    card.style.transition = 'transform 0.5s ease';
});

card.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

// Xử lý sự kiện khi ấn nút Sign in
const loginForm = document.getElementById('login-form');
const submitBtn = document.getElementById('submit-btn');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.innerHTML = "<span>Signing in...</span>";
    setTimeout(() => {
        submitBtn.innerHTML = "<span>Welcome back! ✓</span>";
        submitBtn.style.background = "#10b981";
        submitBtn.style.color = "#ffffff";
    }, 1000);
});
