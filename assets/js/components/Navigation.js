export class Navigation {
    constructor() {
        this.init();
    }

    init() {
        // Handle page transitions
        document.querySelectorAll('[data-transition]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                document.body.classList.add('page-transition');
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector('nav .container').insertBefore(
            mobileMenuBtn,
            document.querySelector('.nav-links')
        );

        mobileMenuBtn.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('active');
            mobileMenuBtn.innerHTML = document.querySelector('.nav-links').classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav') && document.querySelector('.nav-links.active')) {
                document.querySelector('.nav-links').classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
}
