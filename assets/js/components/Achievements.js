export class Achievements {
    constructor() {
        this.init();
    }

    init() {
        this.setupAchievementAnimation();
        this.setupScrollAnimation();
    }

    setupAchievementAnimation() {
        const achievementNumbers = document.querySelectorAll('.achievement-number');
        
        achievementNumbers.forEach(number => {
            const finalValue = parseInt(number.textContent);
            let startValue = 0;
            const duration = 2000; // 2 seconds
            const increment = finalValue / (duration / 16); // 60fps

            function updateNumber() {
                startValue += increment;
                if (startValue < finalValue) {
                    number.textContent = Math.floor(startValue) + '+';
                    requestAnimationFrame(updateNumber);
                } else {
                    number.textContent = finalValue + '+';
                }
            }

            // Start animation when element is in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateNumber();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(number);
        });
    }

    setupScrollAnimation() {
        const cards = document.querySelectorAll('.achievement-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => {
            observer.observe(card);
            // Add initial state for animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        });
    }
}
