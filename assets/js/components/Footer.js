// Footer Component
class Footer {
    constructor() {
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const footerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>AndaGlobal</h3>
                            <p>Building South Africa's future through innovative construction and infrastructure solutions. Excellence in every project, integrity in every partnership.</p>
                            <div class="social-links">
                                <a href="https://wa.me/27111234567" target="_blank" aria-label="WhatsApp">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="services.html">Water Infrastructure</a></li>
                                <li><a href="services.html">Road Construction</a></li>
                                <li><a href="services.html">Building Construction</a></li>
                                <li><a href="services.html">Project Management</a></li>
                                <li><a href="services.html">Consulting</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="projects.html">Projects</a></li>
                                <li><a href="clients.html">Clients</a></li>
                                <li><a href="testimonials.html">Testimonials</a></li>
                                <li><a href="careers.html">Careers</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Contact Info</h3>
                            <ul>
                                <li><i class="fas fa-map-marker-alt"></i> 179 Columbine Avenue, Mondeor, 2019 Johannesburg, South Africa</li>
                                <li><i class="fas fa-phone"></i> +27 10 125 0380</li>
                                <li><i class="fas fa-envelope"></i> info@andaglobal.co.za</li>
                                <li><i class="fas fa-clock"></i> Mon - Fri: 8:00 AM - 4:00 PM</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>&copy; 2025 AndaGlobal. All rights reserved. </p>
                    </div>
                </div>
            </footer>
        `;

        // Remove existing footer
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.remove();
        }

        // Insert updated footer
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
}

// Initialize footer on DOM load
document.addEventListener('DOMContentLoaded', () => {
    new Footer();
});

// Export if needed for modular JS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Footer;
}
