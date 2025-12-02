// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Data initialization
    initializeData();
    
    // Initialize components
    initializeBannerSlider();
    initializeFilterButtons();
    initializeTestimonialSlider();
    initializeCounters();
    initializeCharts();
    initializeChartFilters();
    
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
            title: 'Strategic Management Fundamentals',
            provider: 'IIM Bangalore',
            level: 'Beginner',
            duration: '12 Weeks',
            price: 'Free course',
            tags: ['beginner', 'top-rated']
        },
        {
            id: 2,
            title: 'Digital Marketing Specialization',
            provider: 'Google & Coursera',
            level: 'Intermediate',
            duration: '6 Months',
            price: '₹2,699/month',
            tags: ['beginner', 'popular']
        },
        {
            id: 3,
            title: 'Business Analytics with Python',
            provider: 'IBM & edX',
            level: 'Advanced',
            duration: '4 Months',
            price: '₹3,499/month',
            tags: ['top-rated']
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
            labels: ['Business Analytics', 'Digital Marketing', 'HR Management', 'Hospital Admin', 'Others'],
            datasets: [{
                data: [35, 25, 15, 10, 15],
                backgroundColor: [
                    '#0ea5e9', // Blue
                    '#f59e0b', // Yellow
                    '#10b981', // Green
                    '#8b5cf6', // Purple
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
    
    // Enrollment Trend Chart (Line) - Updated for MBA
    const trendCtx = document.getElementById('enrollmentTrendChart');
    if (trendCtx) {
        const trendData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'MBA Programs',
                    data: [150, 180, 220, 250, 290, 330, 380],
                    borderColor: '#0ea5e9',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#0ea5e9',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                },
                {
                    label: 'Business Courses',
                    data: [100, 130, 160, 190, 220, 260, 310],
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#f59e0b',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                },
                {
                    label: 'All Management',
                    data: [250, 290, 340, 380, 420, 470, 520],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }
            ]
        };
        
        new Chart(trendCtx, {
            type: 'line',
            data: trendData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
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
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value;
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                animation: {
                    duration: 1000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
}

function initializeChartFilters() {
    const monthlyBtn = document.querySelector('.monthly-btn');
    const yearlyBtn = document.querySelector('.yearly-btn');
    
    if (monthlyBtn && yearlyBtn) {
        monthlyBtn.addEventListener('click', function() {
            this.classList.remove('bg-gray-100', 'text-gray-700');
            this.classList.add('bg-blue-100', 'text-blue-700');
            
            yearlyBtn.classList.remove('bg-blue-100', 'text-blue-700');
            yearlyBtn.classList.add('bg-gray-100', 'text-gray-700');
            
            updateTrendChart('monthly');
        });
        
        yearlyBtn.addEventListener('click', function() {
            this.classList.remove('bg-gray-100', 'text-gray-700');
            this.classList.add('bg-blue-100', 'text-blue-700');
            
            monthlyBtn.classList.remove('bg-blue-100', 'text-blue-700');
            monthlyBtn.classList.add('bg-gray-100', 'text-gray-700');
            
            updateTrendChart('yearly');
        });
    }
}

function updateTrendChart(period) {
    const trendCtx = document.getElementById('enrollmentTrendChart');
    if (!trendCtx) return;
    
    const chart = Chart.getChart(trendCtx);
    if (!chart) return;
    
    if (period === 'yearly') {
        chart.data.labels = ['2020', '2021', '2022', '2023', '2024'];
        chart.data.datasets[0].data = [200, 280, 350, 420, 500];
        chart.data.datasets[1].data = [150, 220, 290, 350, 420];
        chart.data.datasets[2].data = [350, 500, 650, 770, 920];
    } else {
        chart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        chart.data.datasets[0].data = [150, 180, 220, 250, 290, 330, 380];
        chart.data.datasets[1].data = [100, 130, 160, 190, 220, 260, 310];
        chart.data.datasets[2].data = [250, 290, 340, 380, 420, 470, 520];
    }
    
    chart.update();
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
                <th>MBA in Digital Marketing</th>
                <th>MBA in Hospital Administration</th>
                <th>MBA in Agribusiness</th>
                <th>MBA in Business Analytics</th>
            </tr>
        </thead>
        <tbody>
            ${window.appData.universityCourses.map(university => `
                <tr>
                    <td><strong>${university.university}</strong></td>
                    <td>${university.courses[0] ? '<i class="fas fa-check text-green-500"></i>' : '<i class="fas fa-times text-red-500"></i>'}</td>
                    <td>${university.courses[1] ? '<i class="fas fa-check text-green-500"></i>' : '<i class="fas fa-times text-red-500"></i>'}</td>
                    <td>${university.courses[2] ? '<i class="fas fa-check text-green-500"></i>' : '<i class="fas fa-times text-red-500"></i>'}</td>
                    <td>${university.courses[3] ? '<i class="fas fa-check text-green-500"></i>' : '<i class="fas fa-times text-red-500"></i>'}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    
    matrixContainer.innerHTML = '';
    matrixContainer.appendChild(table);
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
                this.style.background = 'linear-gradient(to right, #10b981, #34d399)';
                
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