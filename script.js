document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('loginContainer');
    const loginForm = document.getElementById('loginForm');
    const signinBtn = document.getElementById('signinBtn');

    // 1. 3D Tilt Effect on Mouse Move
    let maxTilt = 8; // maximum tilt in degrees
    let tiltX = 0;
    let tiltY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;

    loginContainer.addEventListener('mousemove', (e) => {
        const rect = loginContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        targetTiltX = -(mouseY / rect.height) * maxTilt;
        targetTiltY = (mouseX / rect.width) * maxTilt;
    });

    loginContainer.addEventListener('mouseleave', () => {
        targetTiltX = 0;
        targetTiltY = 0;
    });

    // Smooth animation loop for tilt
    function animateTilt() {
        tiltX += (targetTiltX - tiltX) * 0.1; // easing
        tiltY += (targetTiltY - tiltY) * 0.1;

        loginContainer.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

        requestAnimationFrame(animateTilt);
    }
    animateTilt();

    // 2. Form Submission Simulated Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Prevent double submission
        if (signinBtn.classList.contains('loading') || signinBtn.classList.contains('success')) {
            return;
        }

        // Simulate loading state
        signinBtn.classList.add('loading');
        signinBtn.querySelector('.btn-text').textContent = 'Signing in...';

        // Simulate authentication (delay for demo)
        setTimeout(() => {
            signinBtn.classList.remove('loading');
            signinBtn.classList.add('success');
            signinBtn.querySelector('.btn-text').textContent = 'Success';

            // Optionally redirect after success
            // setTimeout(() => {
            //     window.location.href = '/dashboard';
            // }, 1500);
        }, 2000);
    });

    // Social buttons (prevent default for demo)
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Handle social login here
            console.log('Social login clicked:', btn.classList[1]);
        });
    });

    // Forgot password link
    document.querySelector('.forgot-link').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Password recovery flow would go here.');
    });

    // Create account link
    document.querySelector('.create-link').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirect to registration page.');
    });
});
