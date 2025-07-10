export class LoadingScreen {
    constructor() {
        this.init();
    }

    init() {
        this.setupLoadingScreen();
        this.setupScrollProgress();
        this.setupBackToTop();
    }

    setupLoadingScreen() {
        const loadingScreen = document.querySelector('.loading-screen');
        
        // Simulate loading time
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                document.body.style.overflow = 'auto';
                
                // Trigger entrance animations
                this.triggerEntranceAnimations();
            }, 500);
        }, 2000);
    }

    triggerEntranceAnimations() {
        // Animate page header
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
            pageHeader.style.opacity = '0';
            pageHeader.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                pageHeader.style.transition = 'all 0.8s ease';
                pageHeader.style.opacity = '1';
                pageHeader.style.transform = 'translateY(0)';
            }, 100);
        }

        // Animate sections with stagger
        const sections = document.querySelectorAll('section:not(.page-header)');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            setTimeout(() => {
                section.style.transition = 'all 0.6s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 200 + (index * 100));
        });
    }

    setupScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    setupBackToTop() {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(backToTopBtn);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
