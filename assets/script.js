// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');

    // CTA Button
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            alert('Welcome to Rotaract Club! Learn more by exploring our pages.');
        });
    }
});
