
// Video Loader Logic
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            document.body.classList.remove('loading');
        }, 3000); // 4 second display time
    }
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');

        const icon = mobileToggle.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });
}

// Smooth Scrolling Logic
document.querySelectorAll('.nav-item, .dock-item, .nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Close mobile menu when link is clicked
        if (mobileMenu) mobileMenu.classList.remove('active');
        const icon = mobileToggle?.querySelector('i');
        if (icon) {
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }


        const href = this.getAttribute('href');
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Navbar stack: 20px gap at top + approx 70px height + 10px buffer
                const totalOffset = 100;

                // Force reveal immediately so the element's position is stable
                targetElement.classList.add('revealed');

                let targetPosition;
                if (targetId === 'home') {
                    // Always scroll to absolute top for home
                    targetPosition = 0;
                } else {
                    // Exact calculation using current scroll and viewport position
                    const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    targetPosition = elementTop - totalOffset;
                }

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if it was open (future-proofing)
                // update active state
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        }
    });
});

// Scroll Reveal Effect
const revealOnScroll = () => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Navbar styling on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.main-navbar');
    if (window.scrollY > 100) {
        navbar.style.padding = "0.5rem 1.5rem";
        navbar.style.background = "rgba(2, 12, 24, 0.98)";
    } else {
        navbar.style.padding = "0.5rem 2.1rem";
        navbar.style.background = "linear-gradient(180deg, rgba(8, 30, 56, 0.9) 0%, rgba(2, 12, 24, 0.95) 100%)";
    }
});
// Refresh on Mozilla Logo Click
const mozLogo = document.querySelector('.moz-logo');
if (mozLogo) {
    mozLogo.style.cursor = 'pointer';
    mozLogo.addEventListener('click', () => {
        window.location.reload();
    });
}

// Scroll To Top Button Logic
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
            scrollTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollTopBtn.classList.remove('visible');
            scrollTopBtn.style.pointerEvents = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
