export const Services = {
    render: () => {
        return `
            <!-- Page Header -->
            <section class="page-header">
                <div class="container">
                    <h1>Our Services</h1>
                    <p>Comprehensive technology solutions for your business needs</p>
                </div>
            </section>

            <!-- Services Detailed -->
            <section class="services-detailed">
                <div class="container">
                    <div class="service-detailed">
                        <div class="service-content">
                            <div class="service-icon">
                                <i class="fas fa-laptop-code"></i>
                            </div>
                            <div class="service-info">
                                <h2>Software Development</h2>
                                <p>We create custom software solutions tailored to your business requirements. Our experienced development team uses cutting-edge technologies to build scalable, secure, and user-friendly applications.</p>
                                <ul>
                                    <li>Web Application Development</li>
                                    <li>Desktop Software Solutions</li>
                                    <li>API Development & Integration</li>
                                    <li>Database Design & Management</li>
                                    <li>Quality Assurance & Testing</li>
                                </ul>
                                <div class="service-features">
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>Agile Development</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>24/7 Support</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>Scalable Architecture</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-detailed">
                        <div class="service-content">
                            <div class="service-icon">
                                <i class="fas fa-cloud"></i>
                            </div>
                            <div class="service-info">
                                <h2>Cloud Solutions</h2>
                                <p>Transform your business with our comprehensive cloud services. We help organizations migrate to the cloud, optimize their infrastructure, and leverage cloud-native technologies for better performance and cost efficiency.</p>
                                <ul>
                                    <li>Cloud Migration Services</li>
                                    <li>Infrastructure as a Service (IaaS)</li>
                                    <li>Platform as a Service (PaaS)</li>
                                    <li>Cloud Security & Compliance</li>
                                    <li>DevOps & Automation</li>
                                </ul>
                                <div class="service-features">
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>BEE Certified</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>NHBRC Registered</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>Cost Optimization</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-detailed">
                        <div class="service-content">
                            <div class="service-icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div class="service-info">
                                <h2>Mobile Applications</h2>
                                <p>Reach your customers wherever they are with our mobile app development services. We create native and cross-platform applications that deliver exceptional user experiences across all devices.</p>
                                <ul>
                                    <li>iOS App Development</li>
                                    <li>Android App Development</li>
                                    <li>Cross-Platform Solutions</li>
                                    <li>UI/UX Design</li>
                                    <li>App Store Optimization</li>
                                </ul>
                                <div class="service-features">
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>CIDB Graded</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>E-Profile Verified</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>App Store Ready</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-detailed">
                        <div class="service-content">
                            <div class="service-icon">
                                <i class="fas fa-cogs"></i>
                            </div>
                            <div class="service-info">
                                <h2>Digital Transformation</h2>
                                <p>Navigate the digital landscape with confidence. Our digital transformation services help organizations modernize their operations, improve efficiency, and stay competitive in the digital age.</p>
                                <ul>
                                    <li>Digital Strategy Consulting</li>
                                    <li>Process Automation</li>
                                    <li>Legacy System Modernization</li>
                                    <li>Data Analytics & BI</li>
                                    <li>Change Management</li>
                                </ul>
                                <div class="service-features">
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>Strategic Planning</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>ROI Focused</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check"></i>
                                        <span>Future-Ready</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Certifications Section -->
            <section class="certifications">
                <div class="container">
                    <h2>Our Certifications</h2>
                    <div class="certifications-grid">
                        <div class="certification-card">
                            <i class="fas fa-certificate"></i>
                            <h3>BEE Certification</h3>
                            <p>Broad-Based Black Economic Empowerment certified company</p>
                        </div>
                        <div class="certification-card">
                            <i class="fas fa-home"></i>
                            <h3>NHBRC Registration</h3>
                            <p>National Home Builders Registration Council registered</p>
                        </div>
                        <div class="certification-card">
                            <i class="fas fa-building"></i>
                            <h3>CIDB Grading</h3>
                            <p>Construction Industry Development Board graded contractor</p>
                        </div>
                        <div class="certification-card">
                            <i class="fas fa-user-check"></i>
                            <h3>E-Profile Verified</h3>
                            <p>Electronic profile verification for transparency</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="cta-section">
                <div class="container">
                    <h2>Ready to Transform Your Business?</h2>
                    <p>Let's discuss how our services can help you achieve your goals</p>
                    <a href="#/contact" class="cta-button">Get Started Today</a>
                </div>
            </section>
        `;
    }
};
