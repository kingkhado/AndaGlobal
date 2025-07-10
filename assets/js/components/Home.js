export const Home = {
    render: () => {
        return `
            <!-- Hero Section -->
            <section class="hero-video hero-gradient">
                <div class="video-overlay no-background">
                    <h1>Innovating Tomorrow's Technology Today</h1>
                    <p>Excellence in Digital Solutions & Technology Innovation</p>
                    <button class="play-button">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
            </section>

            <!-- Services Preview -->
            <section id="services" class="services">
                <div class="container">
                    <h2>Our Services</h2>
                    <div class="services-grid">
                        <div class="service-card">
                            <i class="fas fa-laptop-code"></i>
                            <h3>Software Development</h3>
                            <p>Custom software solutions and application development</p>
                        </div>
                        <div class="service-card">
                            <i class="fas fa-cloud"></i>
                            <h3>Cloud Solutions</h3>
                            <p>Scalable cloud infrastructure and migration services</p>
                        </div>
                        <div class="service-card">
                            <i class="fas fa-mobile-alt"></i>
                            <h3>Mobile Applications</h3>
                            <p>Native and cross-platform mobile app development</p>
                        </div>
                        <div class="service-card">
                            <i class="fas fa-cogs"></i>
                            <h3>Digital Transformation</h3>
                            <p>Comprehensive digital strategy and implementation</p>
                        </div>
                    </div>
                    <div class="view-more-container">
                        <a href="#/services" class="view-more-btn" data-transition>View All Services</a>
                    </div>
                </div>
            </section>

            <!-- Companies Slider -->
            <section class="companies">
                <div class="container">
                    <h2>Our Trusted Partners</h2>
                    <div class="companies-slider">
                        <div class="slider-track">
                            <div class="slide">
                                <img src="assets/images/company1.png" alt="Partner Company 1">
                            </div>
                            <div class="slide">
                                <img src="assets/images/company2.png" alt="Partner Company 2">
                            </div>
                            <div class="slide">
                                <img src="assets/images/company3.png" alt="Partner Company 3">
                            </div>
                            <div class="slide">
                                <img src="assets/images/company4.png" alt="Partner Company 4">
                            </div>
                            <div class="slide">
                                <img src="assets/images/company5.png" alt="Partner Company 5">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Currently Building -->
            <section id="projects" class="projects">
                <div class="container">
                    <h2>Currently Building</h2>
                    <div class="current-project">
                        <div class="project-slider">
                            <div class="slider-container">
                                <div class="slide active">
                                    <img src="assets/images/projects/nigel-water-tank.jpg" alt="Yetta Nattan Community Centre - Progress 1">
                                </div>
                                <div class="slide">
                                    <img src="assets/images/projects/letaba-hospital.jpg" alt="Yetta Nattan Community Centre - Progress 2">
                                </div>
                                <div class="slide">
                                    <img src="assets/images/projects/bulk-meter-telemetry.jpg" alt="Yetta Nattan Community Centre - Progress 3">
                                </div>
                            </div>
                            <div class="slider-navigation">
                                <button class="prev-btn" onclick="changeSlide(-1)">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <div class="slider-dots">
                                    <span class="dot active" onclick="currentSlide(1)"></span>
                                    <span class="dot" onclick="currentSlide(2)"></span>
                                    <span class="dot" onclick="currentSlide(3)"></span>
                                </div>
                                <button class="next-btn" onclick="changeSlide(1)">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                        <div class="project-info">
                            <h3>Yetta Nattan Community Centre</h3>
                            <p>Community centre construction project currently under development for Johannesburg Development Agency (JDA). This state-of-the-art facility will serve as a hub for community activities, education, and social services.</p>
                            <div class="project-status">
                                <div class="status-item">
                                    <i class="fas fa-calendar"></i>
                                    <span>Status: Under Construction</span>
                                </div>
                                <div class="status-item">
                                    <i class="fas fa-money-bill"></i>
                                    <span>Value: R35,750,000.00</span>
                                </div>
                                <div class="status-item">
                                    <i class="fas fa-building"></i>
                                    <span>Client: Johannesburg Development Agency (JDA)</span>
                                </div>
                                <div class="status-item">
                                    <i class="fas fa-chart-line"></i>
                                    <span>Progress: 65% Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="view-more-container">
                        <a href="#/projects" class="view-more-btn" data-transition>View All Projects</a>
                    </div>
                </div>
            </section>

            <!-- About Preview -->
            <section id="about" class="about">
                <div class="container">
                    <h2>About Us</h2>
                    <div class="about-content">
                        <div class="about-text">
                            <p>AndaGlobal has been at the forefront of technology innovation for over two decades. Our commitment to quality, innovation, and sustainability has made us a leader in the technology solutions industry.</p>
                            <ul class="achievements">
                                <li><i class="fas fa-check-circle"></i> 20+ Years of Experience</li>
                                <li><i class="fas fa-check-circle"></i> 500+ Completed Projects</li>
                                <li><i class="fas fa-check-circle"></i> ISO 9001 Certified</li>
                                <li><i class="fas fa-check-circle"></i> Award-Winning Team</li>
                            </ul>
                            <div class="view-more-container">
                                <a href="#/about" class="view-more-btn" data-transition>Learn More About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
};
