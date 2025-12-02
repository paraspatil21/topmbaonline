// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Data initialization
    initializeData();
    
    // Initialize components
    initializeBannerSlider();
    initializeFilterButtons();
    initializeTestimonialSlider();
    initializeCounters();
    initializeCharts(); // Removed initializeChartFilters()
    
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
    // Top Universities Data
    const universities = [
        { id: 1, name: 'IIM Ahmedabad', shortName: 'IIMA' },
        { id: 2, name: 'Jain University', shortName: 'Jain' },
        { id: 3, name: 'IIT Delhi', shortName: 'IITD' },
        { id: 4, name: 'Amity University', shortName: 'Amity' },
        { id: 5, name: 'Coursera', shortName: 'Coursera' },
        { id: 6, name: 'Google', shortName: 'Google' },
        { id: 7, name: 'IIM Kolkata', shortName: 'IIMK' },
        { id: 8, name: 'KPMG', shortName: 'KPMG' },
        { id: 9, name: 'Manipal University', shortName: 'Manipal' },
        { id: 10, name: 'DY Patil University', shortName: 'DY Patil' },
        { id: 11, name: 'UPES', shortName: 'UPES' },
        { id: 12, name: 'Chandigarh University', shortName: 'Chandigarh' }
    ];

    // MBA Specializations Data
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
            title: 'MBA in Agribusiness Management',
            description: 'Focus on agricultural business, supply chain, and rural development management.',
            icon: 'fa-tractor'
        },
        {
            id: 4,
            title: 'MBA in Hospitality Management',
            description: 'Excel in hotel, tourism, and hospitality industry management.',
            icon: 'fa-concierge-bell'
        },
        {
            id: 5,
            title: 'MBA in Petroleum & Natural Gas Management',
            description: 'Specialize in energy sector management, oil & gas operations.',
            icon: 'fa-oil-well'
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
            provider: 'IIM Ahmedabad',
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
            title: 'MBA in Agribusiness',
            provider: 'Jain University',
            level: 'Intermediate',
            duration: '18 Months',
            price: '₹1,50,000',
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

    // University-Course Matrix Data (removed HR Management column)
    const universityCourses = [
        {
            university: 'Amity University Online',
            courses: ['MBA in Digital Marketing', 'MBA in Hospital Administration', 'MBA in Business Analytics', 'MBA in Agribusiness']
        },
        {
            university: 'Jain University',
            courses: ['MBA in Digital Marketing', 'MBA in Business Analytics', 'MBA in Hospitality', 'MBA in Agribusiness']
        },
        {
            university: 'Manipal University Jaipur',
            courses: ['MBA in Digital Marketing', 'MBA in Hospitality', 'MBA in Business Analytics', 'MBA in Petroleum']
        },
        {
            university: 'DY Patil University',
            courses: ['MBA in Hospital Administration', 'MBA in Business Analytics', 'MBA in Digital Marketing', 'MBA in Agribusiness']
        },
        {
            university: 'UPES',
            courses: ['MBA in Digital Marketing', 'MBA in Petroleum', 'MBA in Business Analytics', 'MBA in Hospitality']
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

// Banner Slider
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
            <div class="col-span-full text-center py-8">
                <i class="fas fa-search text-4xl text-gray-300 mb-4"></i>
                <p class="text-gray-500">No courses found for this filter.</p>
            </div>
        `;
        return;
    }
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'certification-card fade-in';
        courseCard.innerHTML = `
            <div class="certification-header">
                <div class="certification-logo">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div>
                    <h4 class="font-bold text-lg">${course.title}</h4>
                    <p class="text-gray-600">${course.provider}</p>
                </div>
            </div>
            <div class="mb-4">
                <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                    <i class="fas fa-user-graduate mr-1"></i>${course.level}
                </span>
                <span class="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    <i class="far fa-clock mr-1"></i>${course.duration}
                </span>
            </div>
            <div class="flex justify-between items-center">
                <div class="text-lg font-bold ${course.price.includes('Free') ? 'text-green-600' : 'text-gray-800'}">
                    ${course.price}
                </div>
                <button class="compare-btn" data-course-id="${course.id}">
                    <i class="fas fa-plus"></i> Compare
                </button>
            </div>
        `;
        coursesGrid.appendChild(courseCard);
    });
    
    attachCompareEventListeners();
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

// Initialize counters for stats
function initializeCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
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

// Initialize charts
function initializeCharts() {
    // Course Categories Chart (Pie/Doughnut) - Updated for MBA
    const categoriesCtx = document.getElementById('courseCategoriesChart');
    if (categoriesCtx) {
        const categoriesData = {
            labels: ['Business Analytics', 'Digital Marketing', 'HR Management', 'Hospital Admin', 'Finance', 'Others'],
            datasets: [{
                data: [30, 25, 15, 10, 12, 8],
                backgroundColor: [
                    '#0ea5e9', // Blue
                    '#f59e0b', // Yellow
                    '#10b981', // Green
                    '#8b5cf6', // Purple
                    '#ef4444', // Red
                    '#94a3b8'  // Gray
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
                        display: false
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
                <button class="mba-compare-btn" data-course-id="${course.id}">
                    <i class="fas fa-plus"></i> Compare
                </button>
            </div>
        `;
        coursesGrid.appendChild(courseCard);
    });
    
    attachCompareEventListeners();
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
                <button class="mba-compare-btn" data-course-id="${course.id}">
                    <i class="fas fa-plus"></i> Compare
                </button>
            </div>
        `;
        coursesGrid.appendChild(courseCard);
    });
    
    attachCompareEventListeners();
}

// Helper functions for university logos
function getUniversityLogoClass(provider) {
    if (provider.includes('NMIMS')) return 'nmims';
    if (provider.includes('VIT')) return 'vit';
    if (provider.includes('IIM')) return 'iim';
    if (provider.includes('Jain')) return 'jain';
    return '';
}

function getUniversityLogoText(provider) {
    if (provider.includes('NMIMS')) return 'NM';
    if (provider.includes('VIT')) return 'VI';
    if (provider.includes('IIM')) return 'II';
    if (provider.includes('Jain')) return 'JN';
    return provider.substring(0, 2);
}

// Update the attachCompareEventListeners function to work with new button class
function attachCompareEventListeners() {
    const compareButtons = document.querySelectorAll('.mba-compare-btn, .compare-btn');
    
    compareButtons.forEach(button => {
        // Remove existing event listeners to avoid duplicates
        button.replaceWith(button.cloneNode(true));
    });
    
    // Re-select the buttons
    const newCompareButtons = document.querySelectorAll('.mba-compare-btn, .compare-btn');
    
    newCompareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course-id') || this.getAttribute('data-specialization-id');
            const courseType = this.getAttribute('data-course-id') ? 'course' : 'specialization';
            
            // Toggle compare state
            this.classList.toggle('compared');
            
            if (this.classList.contains('compared')) {
                this.innerHTML = '<i class="fas fa-check"></i> Added to Compare';
                this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                // Show notification
                showNotification('Program added to compare list!', 'success');
            } else {
                this.innerHTML = courseType === 'course' ? '<i class="fas fa-plus"></i> Compare' : '<i class="fas fa-search"></i> Explore Programs';
                this.style.background = 'linear-gradient(135deg, var(--primary), var(--primary-dark))';
                
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

// Initialize animated counters (missing function)
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