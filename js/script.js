// js/script.js - UPDATED WITH ALL EDITS (including MBA in Operations)
document.addEventListener('DOMContentLoaded', function() {
    // Data initialization
    initializeData();
    
    // Initialize components
    initializeBannerSlider();
    initializeFilterButtons();
    initializeTestimonialSlider();
    initializeCounters();
    initializeCharts();
    
    // Initialize brochure modal
    initializeBrochureModal();
    
    // Search functionality
    initializeSearch();
    
    // Mobile optimization
    optimizeForMobile();
    
    // Initialize animated counters
    setTimeout(() => {
        initializeAnimatedCounters();
    }, 1000);
});

// Data initialization
function initializeData() {
    // Top Universities Data - REMOVED IIM Ahmedabad and IIT Delhi
    const universities = [
        { id: 1, name: 'NMIMS University', shortName: 'NMIMS' },
        { id: 2, name: 'VIT University', shortName: 'VIT' },
        { id: 3, name: 'Jain University', shortName: 'Jain' },
        { id: 4, name: 'Amity University', shortName: 'Amity' },
        { id: 5, name: 'Manipal University', shortName: 'Manipal' },
        { id: 6, name: 'DY Patil University', shortName: 'DY Patil' },
        { id: 7, name: 'UPES', shortName: 'UPES' },
        { id: 8, name: 'Shoolini University', shortName: 'Shoolini' },
        { id: 9, name: 'Chandigarh University', shortName: 'Chandigarh' },
        { id: 10, name: 'Sikkim Manipal University', shortName: 'SMU' }
    ];

    // MBA Specializations Data - UPDATED: Removed Agribusiness and Petroleum, Added Operations, Finance, Data Science, and additional Operations
    const mbaSpecializations = [
        {
            id: 1,
            title: 'MBA in Digital Marketing',
            description: 'Master digital marketing strategies, SEO, social media, and analytics for business growth.',
            icon: 'fa-bullhorn'
        },
        {
            id: 2,
            title: 'MBA in Hospital Administration & Healthcare Management',
            description: 'Specialize in healthcare management, hospital administration, and medical services.',
            icon: 'fa-hospital'
        },
        {
            id: 3,
            title: 'MBA in Operations Management',
            description: 'Focus on supply chain management, process optimization, and operational excellence.',
            icon: 'fa-cogs'
        },
        {
            id: 4,
            title: 'MBA in Hospitality Management',
            description: 'Excel in hotel, tourism, and hospitality industry management.',
            icon: 'fa-concierge-bell'
        },
        {
            id: 5,
            title: 'MBA in Finance',
            description: 'Master financial analysis, investment strategies, and corporate finance management.',
            icon: 'fa-chart-pie'
        },
        {
            id: 6,
            title: 'MBA in Business Analytics',
            description: 'Master data analysis, business intelligence, and predictive modeling.',
            icon: 'fa-chart-line'
        },
        {
            id: 7,
            title: 'MBA in HR Management',
            description: 'Excel in human resources, talent management, and organizational development.',
            icon: 'fa-users'
        },
        {
            id: 8,
            title: 'MBA in Data Science',
            description: 'Specialize in data mining, machine learning, and big data analytics for business decisions.',
            icon: 'fa-database'
        },
        {
            id: 9,
            title: 'MBA in Operations',
            description: 'Master operations management, analytics for business growth.',
            icon: 'fa-bullhorn'
        }
    ];

    // MBA Courses Data
    const mbaCourses = [
        {
            id: 1,
            title: 'MBA in Business Analytics',
            provider: 'NMIMS University',
            level: 'Advanced',
            duration: '24 Months',
            price: '₹2,50,000',
            tags: ['top-rated', 'popular']
        },
        {
            id: 2,
            title: 'MBA in Digital Marketing',
            provider: 'VIT University',
            level: 'Intermediate',
            duration: '18 Months',
            price: '₹1,80,000',
            tags: ['beginner', 'popular']
        },
        {
            id: 3,
            title: 'Executive MBA',
            provider: 'Manipal University',
            level: 'Advanced',
            duration: '24 Months',
            price: '₹4,50,000',
            tags: ['top-rated']
        },
        {
            id: 4,
            title: 'MBA in Hospital Administration',
            provider: 'NMIMS University',
            level: 'Intermediate',
            duration: '18 Months',
            price: '₹2,20,000',
            tags: ['beginner']
        },
        {
            id: 5,
            title: 'MBA in Finance',
            provider: 'VIT University',
            level: 'Advanced',
            duration: '24 Months',
            price: '₹2,00,000',
            tags: ['top-rated', 'popular']
        },
        {
            id: 6,
            title: 'MBA in Operations Management',
            provider: 'Jain University',
            level: 'Intermediate',
            duration: '18 Months',
            price: '₹1,75,000',
            tags: ['beginner']
        },
        {
            id: 7,
            title: 'MBA in Data Science',
            provider: 'Amity University',
            level: 'Advanced',
            duration: '24 Months',
            price: '₹2,80,000',
            tags: ['top-rated', 'popular']
        },
        {
            id: 8,
            title: 'MBA in HR Management',
            provider: 'Chandigarh University',
            level: 'Intermediate',
            duration: '18 Months',
            price: '₹1,65,000',
            tags: ['beginner']
        }
    ];

    // Testimonials Data
    const testimonials = [
        {
            id: 1,
            name: 'Aryan Sharma',
            role: 'Executive MBA at IIM Visakhapatnam',
            content: 'TopMBAOnline.in helped me find the perfect MBA program. The platform\'s detailed comparisons and personalized guidance made my decision easy and confident.',
            avatar: 'A'
        },
        {
            id: 2,
            name: 'Prashant Nigam',
            role: 'MBA Graduate, IIM Kozhikode',
            content: 'The career counseling and program recommendations were spot on. I landed my dream job within 3 months of completing my MBA.',
            avatar: 'P'
        },
        {
            id: 3,
            name: 'Koushik Ghosh',
            role: 'MBA in Business Analytics',
            content: 'Comparing multiple MBA programs was seamless. The platform saved me weeks of research and helped me choose the best fit for my career goals.',
            avatar: 'K'
        },
        {
            id: 4,
            name: 'Shalini Mittal',
            role: 'MBA in Digital Marketing',
            content: 'The placement assistance and mock interviews prepared me perfectly for job interviews. I received 3 offers before graduation!',
            avatar: 'S'
        }
    ];

    // Blogs Data
    const blogs = [
        {
            id: 1,
            title: '10 Best UGC-Approved Online MBA Colleges in India',
            description: 'Ranked & Reviewed - 2026 Guide',
            date: 'Jan 15, 2024',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'Is an Online MBA Worth It for Working Professionals?',
            description: 'Flexibility, Fees & ROI Explained - 2026',
            date: 'Jan 10, 2024',
            readTime: '6 min read'
        },
        {
            id: 3,
            title: 'Top Online MBA Specializations for 2026',
            description: 'Compare Programs, Fees & Career Scope',
            date: 'Jan 5, 2024',
            readTime: '4 min read'
        }
    ];

    // Updated University-Course Matrix Data with updated universities (now 9 specializations)
    const universityCourses = [
        {
            university: 'Amity University Online',
            courses: ['✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓']
        },
        {
            university: 'Jain University',
            courses: ['✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓']
        },
        {
            university: 'Manipal University Jaipur',
            courses: ['✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓']
        },
        {
            university: 'DY Patil University',
            courses: ['✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓']
        },
        {
            university: 'UPES',
            courses: ['✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓']
        },
        {
            university: 'Shoolini University',
            courses: ['✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓']
        },
        {
            university: 'NMIMS University',
            courses: ['✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓']
        },
        {
            university: 'Chandigarh University',
            courses: ['✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓']
        },
        {
            university: 'Sikkim Manipal University',
            courses: ['✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓']
        }
    ];

    // Store data globally
    window.appData = {
        universities,
        mbaSpecializations,
        mbaCourses,
        testimonials,
        blogs,
        universityCourses
    };

    // Render components after data is loaded
    renderUniversities();
    renderMBASpecializations();
    renderMBACourses();
    renderTestimonials();
    renderBlogs();
    renderUniversityCourseMatrix();
}

// Banner Slider - UPDATED: Now only 3 banners with 3rd banner for Executive MBA
function initializeBannerSlider() {
    const banners = document.querySelectorAll('.hero-banner');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-banner');
    const nextBtn = document.getElementById('next-banner');
    
    let currentBanner = 0;
    const totalBanners = banners.length;
    
    // Auto slide every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    function showBanner(index) {
        // Hide all banners
        banners.forEach(banner => banner.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show selected banner
        banners[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentBanner = index;
    }
    
    function nextSlide() {
        let nextIndex = (currentBanner + 1) % totalBanners;
        showBanner(nextIndex);
    }
    
    function prevSlide() {
        let prevIndex = (currentBanner - 1 + totalBanners) % totalBanners;
        showBanner(prevIndex);
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showBanner(index);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
    
    // Event listeners for navigation arrows
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Pause auto-slide on hover
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        heroSection.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
}

// Filter Buttons
function initializeFilterButtons() {
    const mbaFilterBtns = document.querySelectorAll('.genai-filters .filter-btn');
    
    // MBA filters
    mbaFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            mbaFilterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter MBA courses
            const filter = this.getAttribute('data-filter');
            filterMBACourses(filter);
        });
    });
}

function filterMBACourses(filter) {
    const coursesGrid = document.querySelector('.genai-courses-grid');
    const courses = window.appData.mbaCourses;
    
    if (filter === 'all') {
        renderMBACourses();
        return;
    }
    
    const filteredCourses = courses.filter(course => 
        course.tags.includes(filter)
    );
    
    renderFilteredMBACourses(filteredCourses);
}

function renderFilteredMBACourses(courses) {
    const coursesGrid = document.querySelector('.genai-courses-grid');
    
    if (!coursesGrid) return;
    
    coursesGrid.innerHTML = '';
    
    if (courses.length === 0) {
        coursesGrid.innerHTML = `
            <div class="col-span-3 text-center py-12">
                <div class="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
                    <i class="fas fa-search text-5xl text-gray-300 mb-4"></i>
                    <h3 class="text-xl font-bold text-gray-700 mb-2">No courses found</h3>
                    <p class="text-gray-500 mb-6">Try a different filter or browse all MBA programs.</p>
                    <button class="filter-btn active px-6 py-3 rounded-lg" data-filter="all">
                        Show All Programs
                    </button>
                </div>
            </div>
        `;
        
        // Re-attach event listener to the "Show All Programs" button
        const showAllBtn = coursesGrid.querySelector('.filter-btn');
        if (showAllBtn) {
            showAllBtn.addEventListener('click', () => {
                const allBtn = document.querySelector('.genai-filters .filter-btn[data-filter="all"]');
                if (allBtn) {
                    allBtn.click();
                }
            });
        }
        return;
    }
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'mba-square-card fade-in';
        
        // Get university logo class
        const logoClass = getUniversityLogoClass(course.provider);
        const logoText = getUniversityLogoText(course.provider);
        
        courseCard.innerHTML = `
            <div class="mba-card-header">
                <h3 class="mba-card-title">${course.title}</h3>
                <div class="mba-card-provider">
                    <span class="university-logo ${logoClass}">${logoText}</span>
                    ${course.provider}
                </div>
            </div>
            <div class="mba-card-body">
                <div class="mba-card-badges">
                    <span class="mba-badge level">
                        <i class="fas fa-user-graduate"></i>
                        ${course.level}
                    </span>
                    <span class="mba-badge duration">
                        <i class="far fa-clock"></i>
                        ${course.duration}
                    </span>
                    ${course.tags.map(tag => `
                        <span class="mba-badge tag">
                            ${tag === 'top-rated' ? '<i class="fas fa-star"></i> Top Rated' : ''}
                            ${tag === 'popular' ? '<i class="fas fa-fire"></i> Popular' : ''}
                            ${tag === 'beginner' ? '<i class="fas fa-seedling"></i> Beginner' : ''}
                        </span>
                    `).join('')}
                </div>
                <div class="mba-card-price">
                    <div class="mba-price">${course.price}</div>
                    <div class="mba-price-note">Complete Program Fee</div>
                </div>
            </div>
            <div class="mba-card-footer">
                <button class="mba-brochure-btn" data-course-id="${course.id}">
                    <i class="fas fa-info-circle"></i> Get More Information
                </button>
            </div>
        `;
        coursesGrid.appendChild(courseCard);
    });
    
    attachBrochureEventListeners();
}

// Testimonial Slider
function initializeTestimonialSlider() {
    const testimonials = window.appData.testimonials;
    const slidesContainer = document.querySelector('.testimonials-slider');
    const dotsContainer = document.querySelector('.testimonial-dots');
    
    if (!slidesContainer || !dotsContainer) return;
    
    // Clear existing slides
    const existingSlides = slidesContainer.querySelectorAll('.testimonial-slide');
    existingSlides.forEach(slide => slide.remove());
    
    // Create slides
    testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <div class="testimonial-content">
                <p>"${testimonial.content}"</p>
            </div>
            <div class="testimonial-author">
                <div class="author-avatar">
                    <span>${testimonial.avatar}</span>
                </div>
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
        slidesContainer.insertBefore(slide, slidesContainer.querySelector('.testimonial-controls'));
        
        // Create dot
        const dot = document.createElement('span');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });
    
    // Add event listeners to dots
    const dots = document.querySelectorAll('.testimonial-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            showTestimonial(index);
        });
    });
    
    // Add event listeners to navigation buttons
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    
    let currentTestimonial = 0;
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
    }
    
    // Auto slide testimonials
    let testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 8000);
    
    // Pause auto-slide on hover
    slidesContainer.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    slidesContainer.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 8000);
    });
}

function showTestimonial(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show selected slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Initialize counters for stats - UPDATED for new stats
function initializeCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const text = stat.textContent;
        const target = parseInt(text.replace(/\D/g, ''));
        const suffix = text.replace(/[0-9]/g, '');
        
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + suffix;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + suffix;
            }
        }, 30);
    });
}

// Initialize charts - UPDATED for new specializations (now 9)
function initializeCharts() {
    // Course Categories Chart (Pie/Doughnut) - Updated for MBA with new specializations
    const categoriesCtx = document.getElementById('courseCategoriesChart');
    if (categoriesCtx) {
        const categoriesData = {
            labels: ['Business Analytics', 'Digital Marketing', 'Finance', 'Operations Management', 'Operations', 'Data Science', 'HR Management', 'Hospital Admin', 'Others'],
            datasets: [{
                data: [20, 18, 15, 12, 10, 8, 7, 5, 5],
                backgroundColor: [
                    '#0ea5e9', // Blue - Business Analytics
                    '#f59e0b', // Yellow - Digital Marketing
                    '#ef4444', // Red - Finance
                    '#10b981', // Green - Operations Management
                    '#8b5cf6', // Purple - Operations
                    '#f97316', // Orange - Data Science
                    '#06b6d4', // Cyan - HR Management
                    '#ec4899', // Pink - Hospital Admin
                    '#94a3b8'  // Gray - Others
                ],
                borderWidth: 3,
                borderColor: '#ffffff',
                hoverBorderWidth: 4,
                hoverBorderColor: '#ffffff',
                hoverOffset: 10
            }]
        };
        
        new Chart(categoriesCtx, {
            type: 'doughnut',
            data: categoriesData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: '#0ea5e9',
                        borderWidth: 1,
                        cornerRadius: 8,
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                    duration: 1000
                }
            }
        });
    }
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('course-search');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.getElementById('course-search');
    const query = searchInput.value.trim();
    
    if (!query) return;
    
    // Show loading state
    const searchBtn = document.querySelector('.search-btn');
    const originalText = searchBtn.innerHTML;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
    searchBtn.disabled = true;
    
    // Simulate search
    setTimeout(() => {
        // Reset button
        searchBtn.innerHTML = originalText;
        searchBtn.disabled = false;
        
        // Show search results
        alert(`Searching for MBA programs: ${query}\n\nThis would show MBA search results in a real implementation.`);
    }, 1000);
}

// Optimize for mobile
function optimizeForMobile() {
    // Prevent horizontal scrolling on mobile
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    // Improve touch interactions
    const interactiveElements = document.querySelectorAll('button, a, .university-card, .degree-card, .certification-card');
    interactiveElements.forEach(el => {
        el.style.webkitTapHighlightColor = 'transparent';
    });
    
    // Adjust font sizes for mobile
    if (window.innerWidth < 768) {
        document.querySelectorAll('.text-4xl, .text-5xl').forEach(el => {
            if (el.classList.contains('text-4xl')) el.classList.replace('text-4xl', 'text-3xl');
            if (el.classList.contains('text-5xl')) el.classList.replace('text-5xl', 'text-3xl');
        });
    }
}

// Render functions
function renderUniversities() {
    const universityGrid = document.querySelector('.university-grid');
    if (!universityGrid || !window.appData.universities) return;
    
    universityGrid.innerHTML = '';
    
    window.appData.universities.forEach(university => {
        const universityCard = document.createElement('div');
        universityCard.className = 'university-card fade-in';
        universityCard.innerHTML = `
            <div class="university-logo">
                ${university.shortName}
            </div>
            <h3 class="font-semibold">${university.name}</h3>
        `;
        universityGrid.appendChild(universityCard);
    });
}

function renderMBASpecializations() {
    const specializationsGrid = document.getElementById('mba-specializations');
    if (!specializationsGrid || !window.appData.mbaSpecializations) return;
    
    specializationsGrid.innerHTML = '';
    
    window.appData.mbaSpecializations.forEach(specialization => {
        const specCard = document.createElement('div');
        specCard.className = 'degree-card fade-in';
        specCard.innerHTML = `
            <div class="degree-header">
                <div class="flex items-center gap-3">
                    <i class="${specialization.icon} text-2xl"></i>
                    <h3 class="text-xl font-bold">${specialization.title}</h3>
                </div>
            </div>
            <div class="degree-body">
                <p class="text-gray-600 mb-4">${specialization.description}</p>
                <button class="compare-btn" data-specialization-id="${specialization.id}">
                    <i class="fas fa-search"></i> Explore Programs
                </button>
            </div>
        `;
        specializationsGrid.appendChild(specCard);
    });
    
    attachCompareEventListeners();
}

function renderMBACourses() {
    const coursesGrid = document.querySelector('.genai-courses-grid');
    if (!coursesGrid || !window.appData.mbaCourses) return;
    
    coursesGrid.innerHTML = '';
    
    window.appData.mbaCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'mba-square-card fade-in';
        
        // Get university logo class
        const logoClass = getUniversityLogoClass(course.provider);
        const logoText = getUniversityLogoText(course.provider);
        
        courseCard.innerHTML = `
            <div class="mba-card-header">
                <h3 class="mba-card-title">${course.title}</h3>
                <div class="mba-card-provider">
                    <span class="university-logo ${logoClass}">${logoText}</span>
                    ${course.provider}
                </div>
            </div>
            <div class="mba-card-body">
                <div class="mba-card-badges">
                    <span class="mba-badge level">
                        <i class="fas fa-user-graduate"></i>
                        ${course.level}
                    </span>
                    <span class="mba-badge duration">
                        <i class="far fa-clock"></i>
                        ${course.duration}
                    </span>
                    ${course.tags.map(tag => `
                        <span class="mba-badge tag">
                            ${tag === 'top-rated' ? '<i class="fas fa-star"></i> Top Rated' : ''}
                            ${tag === 'popular' ? '<i class="fas fa-fire"></i> Popular' : ''}
                            ${tag === 'beginner' ? '<i class="fas fa-seedling"></i> Beginner' : ''}
                        </span>
                    `).join('')}
                </div>
                <div class="mba-card-price">
                    <div class="mba-price">${course.price}</div>
                    <div class="mba-price-note">Complete Program Fee</div>
                </div>
            </div>
            <div class="mba-card-footer">
                <button class="mba-brochure-btn" data-course-id="${course.id}">
                    <i class="fas fa-info-circle"></i> Get More Information
                </button>
            </div>
        `;
        coursesGrid.appendChild(courseCard);
    });
    
    attachBrochureEventListeners();
}

function renderTestimonials() {
    // Handled by initializeTestimonialSlider
}

function renderBlogs() {
    const blogsGrid = document.querySelector('.blogs-grid');
    if (!blogsGrid || !window.appData.blogs) return;
    
    blogsGrid.innerHTML = '';
    
    window.appData.blogs.forEach(blog => {
        const blogCard = document.createElement('article');
        blogCard.className = 'blog-card fade-in';
        blogCard.innerHTML = `
            <div class="blog-image">
                <i class="fas fa-newspaper"></i>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${blog.date}</span>
                    <span>${blog.readTime}</span>
                </div>
                <h3 class="text-xl font-bold mb-2">${blog.title}</h3>
                <p class="text-gray-600">${blog.description}</p>
                <a href="#" class="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800">
                    Read More <i class="fas fa-arrow-right ml-1"></i>
                </a>
            </div>
        `;
        blogsGrid.appendChild(blogCard);
    });
}

function renderUniversityCourseMatrix() {
    const matrixContainer = document.querySelector('.matrix-container');
    if (!matrixContainer || !window.appData.universityCourses) return;
    
    const table = document.createElement('table');
    table.className = 'matrix-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>University</th>
                <th>Digital Marketing</th>
                <th>Hospital Admin</th>
                <th>Operations Management</th>
                <th>Hospitality Management</th>
                <th>Finance</th>
                <th>Business Analytics</th>
                <th>HR Management</th>
                <th>Data Science</th>
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            ${window.appData.universityCourses.map(university => `
                <tr>
                    <td><strong>${university.university}</strong></td>
                    <td>${university.courses[0]}</td>
                    <td>${university.courses[1]}</td>
                    <td>${university.courses[2]}</td>
                    <td>${university.courses[3]}</td>
                    <td>${university.courses[4]}</td>
                    <td>${university.courses[5]}</td>
                    <td>${university.courses[6]}</td>
                    <td>${university.courses[7]}</td>
                    <td>${university.courses[8]}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    matrixContainer.innerHTML = '';
    matrixContainer.appendChild(table);
}

// Helper functions for university logos
function getUniversityLogoClass(provider) {
    if (provider.includes('NMIMS')) return 'nmims';
    if (provider.includes('VIT')) return 'vit';
    if (provider.includes('Manipal')) return 'manipal';
    if (provider.includes('Jain')) return 'jain';
    if (provider.includes('Amity')) return 'amity';
    if (provider.includes('DY Patil')) return 'dy-patil';
    if (provider.includes('UPES')) return 'upes';
    if (provider.includes('Shoolini')) return 'shoolini';
    if (provider.includes('Chandigarh')) return 'chandigarh';
    if (provider.includes('Sikkim')) return 'sikkim';
    return '';
}

function getUniversityLogoText(provider) {
    if (provider.includes('NMIMS')) return 'NM';
    if (provider.includes('VIT')) return 'VI';
    if (provider.includes('Manipal')) return 'MA';
    if (provider.includes('Jain')) return 'JN';
    if (provider.includes('Amity')) return 'AM';
    if (provider.includes('DY Patil')) return 'DY';
    if (provider.includes('UPES')) return 'UP';
    if (provider.includes('Shoolini')) return 'SH';
    if (provider.includes('Chandigarh')) return 'CH';
    if (provider.includes('Sikkim')) return 'SM';
    return provider.substring(0, 2);
}

// Brochure Modal functionality
function initializeBrochureModal() {
    // Create modal HTML
    const modalHTML = `
        <div id="brochure-modal" class="fixed inset-0 z-50 overflow-y-auto hidden">
            <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" id="modal-backdrop"></div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">Get Your Brochure</h3>
                                <form id="brochure-form" class="space-y-4">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                            <input type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First Name">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                            <input type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Last Name">
                                            <div class="mt-1">
                                                <label class="inline-flex items-center">
                                                    <input type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                                    <span class="ml-2 text-sm text-gray-600">I Don't have a Surname or Last Name</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email">
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                        <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>India</option>
                                            <option>Other Countries</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                        <div class="flex">
                                            <div class="w-20">
                                                <input type="text" value="+91" readonly class="w-full px-3 py-2 border border-gray-300 rounded-l-md bg-gray-100">
                                            </div>
                                            <input type="tel" required class="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone">
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Work Experience</label>
                                        <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>Select Work Experience</option>
                                            <option>0-1 years</option>
                                            <option>1-3 years</option>
                                            <option>3-5 years</option>
                                            <option>5+ years</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Graduation Year/Expected Graduation Year</label>
                                        <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>Select Graduation Year</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                            <option>2026</option>
                                            <option>2027</option>
                                            <option>2028</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">City</label>
                                        <input type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="City">
                                    </div>
                                    
                                    <div class="text-xs text-gray-600">
                                        <p>By clicking the button below, you agree to receive communications via Email/Call/WhatsApp/SMS from VIT and its associates about this programme and other relevant programmes. This will override registry on DND/NDNC.</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" id="submit-brochure" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Get Brochure
                        </button>
                        <button type="button" id="close-modal" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Get modal elements
    const modal = document.getElementById('brochure-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const closeBtn = document.getElementById('close-modal');
    const submitBtn = document.getElementById('submit-brochure');
    const form = document.getElementById('brochure-form');
    
    // Close modal function
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    
    // Open modal function
    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    // Event listeners
    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (form.checkValidity()) {
            alert('Thank you! Your brochure request has been submitted successfully.');
            closeModal();
        } else {
            form.reportValidity();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

// Attach brochure event listeners
function attachBrochureEventListeners() {
    const brochureButtons = document.querySelectorAll('.mba-brochure-btn');
    
    brochureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course-id');
            openBrochureModal(courseId);
        });
    });
}

function openBrochureModal(courseId) {
    const modal = document.getElementById('brochure-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Compare functionality
function attachCompareEventListeners() {
    const compareButtons = document.querySelectorAll('.compare-btn');
    
    compareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course-id') || this.getAttribute('data-specialization-id');
            const courseType = this.getAttribute('data-course-id') ? 'course' : 'specialization';
            
            // Toggle compare state
            this.classList.toggle('compared');
            
            if (this.classList.contains('compared')) {
                this.innerHTML = '<i class="fas fa-check"></i> Added';
                this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                // Show notification
                showNotification('Program added to compare list!', 'success');
            } else {
                this.innerHTML = courseType === 'course' ? '<i class="fas fa-plus"></i> Compare' : '<i class="fas fa-search"></i> Explore Programs';
                this.style.background = '';
                
                // Show notification
                showNotification('Program removed from compare list.', 'info');
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ${type === 'success' ? 'bg-green-500' : 'bg-blue-500'} text-white`;
    notification.textContent = message;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('translate-y-0');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('translate-y-0');
        notification.classList.add('translate-y-full');
        
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Initialize on page load
window.addEventListener('load', function() {
    // Add loading animation to cards
    const cards = document.querySelectorAll('.degree-card, .certification-card, .university-card');
    cards.forEach(card => {
        card.classList.add('fade-in');
    });
});

// Initialize animated counters
function initializeAnimatedCounters() {
    const animatedNumbers = document.querySelectorAll('.animated-number');
    
    animatedNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + suffix;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + suffix;
            }
        }, 30);
    });
}