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

        // Create mobile menu
        this.createMobileMenu();
    }

    createMobileMenu() {
        // Mobile menu toggle button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector('nav .container').insertBefore(
            mobileMenuBtn,
            document.querySelector('.nav-links')
        );

        // Create simplified mobile menu
        const originalNavLinks = document.querySelector('.nav-links');
        const mobileNavLinks = document.createElement('ul');
        mobileNavLinks.className = 'mobile-nav-links';
        
        // Add phone number with call icon at top
        const phoneItem = document.createElement('li');
        phoneItem.innerHTML = '<a href="tel:+27101250380" class="mobile-phone-link"><i class="fas fa-phone"></i> 010 125 0380</a>';
        mobileNavLinks.appendChild(phoneItem);
        
        // Add simplified menu items as requested by user
        const menuItems = [
            { text: 'Home', href: 'index.html' },
            { text: 'Testimonials', href: 'testimonials.html' },
            { text: 'Projects', href: 'projects.html' },
            { text: 'Become a Client', href: 'contact.html', class: 'mobile-client-link' }
        ];
        
        menuItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            if (item.class) {
                a.className = item.class;
            }
            if (item.href !== 'index.html') {
                a.setAttribute('data-transition', '');
            }
            li.appendChild(a);
            mobileNavLinks.appendChild(li);
        });
        
        // Insert mobile menu after original nav
        originalNavLinks.parentNode.insertBefore(mobileNavLinks, originalNavLinks.nextSibling);

        // Mobile menu toggle functionality
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = mobileNavLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav') && mobileNavLinks.classList.contains('active')) {
                mobileNavLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Handle mobile menu link clicks
        mobileNavLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                mobileNavLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                
                if (e.target.hasAttribute('data-transition')) {
                    e.preventDefault();
                    const href = e.target.getAttribute('href');
                    document.body.classList.add('page-transition');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 300);
                }
            }
        });
    }
}
