// js/script.js - UPDATED WITH NEW UNIVERSITY SECTION
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Initialize components
    initializeData();
    initializeBannerSlider();
    initializeFilterButtons();
    initializeTestimonialSlider();
    initializeCounters();
    initializeCharts();
    initializeBrochureModal();
    initializeSearch();
    optimizeForMobile();
    
    // Initialize animated counters
    setTimeout(() => {
        initializeAnimatedCounters();
    }, 1000);
    
    // Initial render
    renderAllComponents();
});

// Data initialization - COMPLETELY NEW UNIVERSITY DATA
function initializeData() {
    console.log('Initializing data...');
    
    // NEW: University Data with local image paths
    const universities = [
        { 
            id: 1, 
            name: 'NMIMS University', 
            shortName: 'NMIMS',
            logoPath: 'assets/img/NMIMS.png',
            fallbackText: 'NM',
            fallbackColor: 'bg-gradient-to-r from-blue-600 to-blue-700'
        },
        { 
            id: 2, 
            name: 'VIT University', 
            shortName: 'VIT',
            logoPath: 'assets/img/VIT.png',
            fallbackText: 'VI',
            fallbackColor: 'bg-gradient-to-r from-yellow-500 to-yellow-600'
        },
        { 
            id: 3, 
            name: 'Jain University', 
            shortName: 'Jain',
            logoPath: 'assets/img/Jain.png',
            fallbackText: 'JN',
            fallbackColor: 'bg-gradient-to-r from-purple-600 to-purple-700'
        },
        { 
            id: 4, 
            name: 'Amity University', 
            shortName: 'Amity',
            logoPath: 'assets/img/Amity.png',
            fallbackText: 'AM',
            fallbackColor: 'bg-gradient-to-r from-red-600 to-red-700'
        },
        { 
            id: 5, 
            name: 'Manipal University', 
            shortName: 'Manipal',
            logoPath: 'assets/img/Manipal.png',
            fallbackText: 'MA',
            fallbackColor: 'bg-gradient-to-r from-green-600 to-green-700'
        },
        { 
            id: 6, 
            name: 'DY Patil University', 
            shortName: 'DY Patil',
            logoPath: 'assets/img/DY_PATIL.png',
            fallbackText: 'DY',
            fallbackColor: 'bg-gradient-to-r from-indigo-600 to-indigo-700'
        },
        { 
            id: 7, 
            name: 'UPES', 
            shortName: 'UPES',
            logoPath: 'assets/img/UPES.png',
            fallbackText: 'UP',
            fallbackColor: 'bg-gradient-to-r from-teal-600 to-teal-700'
        },
        { 
            id: 8, 
            name: 'Shoolini University', 
            shortName: 'Shoolini',
            logoPath: 'assets/img/Shoolini.png',
            fallbackText: 'SH',
            fallbackColor: 'bg-gradient-to-r from-pink-600 to-pink-700'
        },
        { 
            id: 9, 
            name: 'Chandigarh University', 
            shortName: 'Chandigarh',
            logoPath: 'assets/img/CU.png',
            fallbackText: 'CH',
            fallbackColor: 'bg-gradient-to-r from-orange-600 to-orange-700'
        },
        { 
            id: 10, 
            name: 'Sikkim Manipal University', 
            shortName: 'SMU',
            logoPath: 'assets/img/SMU.png',
            fallbackText: 'SM',
            fallbackColor: 'bg-gradient-to-r from-cyan-600 to-cyan-700'
        }
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
        }
    ];

    // Updated MBA Courses Data
    const mbaCourses = [
        {
            id: 1,
            university: 'NMIMS University',
            courseName: 'MBA (WX) - Leadership & Strategy',
            duration: '2 years',
            fees: '₹4,00,000',
            category: 'Executive MBA',
            eligibility: 'Bachelor\'s Degree (10+2+3) in any discipline from recognized University or an equivalent degree recognised by Association of Indian Universities (AIU) with a minimum of 55% (50% for SC/ST/OBC/PwD) and 3 + years of Work Experience'
        },
        {
            id: 2,
            university: 'NMIMS University',
            courseName: 'MBA (WX) - Operations & Supply Chain Management',
            duration: '2 years',
            fees: '₹4,00,000',
            category: 'Executive MBA',
            eligibility: 'Bachelor\'s Degree (10+2+3) in any discipline from recognized University or an equivalent degree recognised by Association of Indian Universities (AIU) with a minimum of 55% (50% for SC/ST/OBC/PwD) and 3 + years of Work Experience'
        },
        {
            id: 3,
            university: 'Manipal University',
            courseName: 'Analytics & Data Science',
            duration: '2 years',
            fees: '₹1,75,000',
            category: 'Online MBA',
            eligibility: ''
        },
        {
            id: 4,
            university: 'Manipal University',
            courseName: 'Information System Management',
            duration: '2 years',
            fees: '₹1,75,000',
            category: 'Online MBA',
            eligibility: 'Candidates must have a 10 + 2 + 3-year bachelor\'s degree from a recognized university/institution or an equivalent qualification as recognized by the Association of Indian Universities.'
        },
        {
            id: 5,
            university: 'VIT University',
            courseName: 'General Management',
            duration: '2 years',
            fees: '₹1,85,000',
            category: 'Online MBA',
            eligibility: 'Completed a Bachelor\'s degree of at least three years duration with a minimum of 50% marks (45% for candidates in reserved categories).'
        },
        {
            id: 6,
            university: 'VIT University',
            courseName: 'Operation and Supply Chain Management',
            duration: '2 years',
            fees: '₹1,85,000',
            category: 'Online MBA',
            eligibility: 'Completed a Bachelor\'s degree of at least three years duration with a minimum of 50% marks (45% for candidates in reserved categories).'
        },
        {
            id: 7,
            university: 'Amity University',
            courseName: 'MBA in Dual Specialization',
            duration: '2 years',
            fees: '₹1,99,000',
            category: 'Online MBA',
            eligibility: '1. Fresh graduates and working professionals.<br>2. Entrepreneurs looking to develop skills to manage critical business projects.'
        },
        {
            id: 8,
            university: 'Amity University',
            courseName: 'MBA in International Finance',
            duration: '2 years',
            fees: '₹1,99,000',
            category: 'Online MBA',
            eligibility: '1. Fresh graduates and working professionals.<br>2. Entrepreneurs looking to develop skills to manage critical business projects.'
        },
        {
            id: 9,
            university: 'Jain University',
            courseName: 'MBA in AI for Business Strategy',
            duration: '2 years',
            fees: '₹2,50,000',
            category: 'Online MBA',
            eligibility: '1. Pass in an Undergraduate (Bachelor) Program of a minimum duration of three (3) years in any stream from a UGC Recognized University<br>2. A minimum aggregate of 50% or an equivalent letter/ numerical grade.<br>3. A relaxation of 5% shall be given to SC/ST candidates.<br>Candidates who are in the final semester of the Bachelors Program are also eligible to apply.'
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

    // Store data globally
    window.appData = {
        universities,
        mbaSpecializations,
        mbaCourses,
        testimonials,
        blogs
    };

    console.log('Data initialized successfully');
}

// Render all components
function renderAllComponents() {
    renderUniversitiesNew();
    renderMBASpecializations();
    renderMBACourses();
    renderTestimonials();
    renderBlogs();
}

// NEW: University rendering function for the redesigned section
function renderUniversitiesNew() {
    const universityGrid = document.querySelector('.university-grid-new');
    if (!universityGrid || !window.appData.universities) {
        console.error('University grid or data not found');
        return;
    }
    
    console.log('Rendering new university grid...');
    universityGrid.innerHTML = '';
    
    window.appData.universities.forEach(university => {
        console.log(`Rendering ${university.name} with logo path: ${university.logoPath}`);
        
        const universityCard = document.createElement('div');
        universityCard.className = 'university-card-new fade-in';
        
        // Create logo container
        const logoContainer = document.createElement('div');
        logoContainer.className = 'university-logo-container';
        
        // Create image element
        const img = document.createElement('img');
        img.src = university.logoPath;
        img.alt = `${university.name} Logo`;
        img.loading = 'lazy';
        img.className = 'university-logo-img';
        
        // Create fallback div (hidden initially)
        const fallbackDiv = document.createElement('div');
        fallbackDiv.className = `university-logo-fallback ${university.fallbackColor}`;
        fallbackDiv.textContent = university.fallbackText;
        fallbackDiv.style.display = 'none';
        
        // Add image error handler
        img.onerror = function() {
            console.error(`Failed to load logo: ${university.logoPath}`);
            this.style.display = 'none';
            fallbackDiv.style.display = 'flex';
        };
        
        img.onload = function() {
            console.log(`Logo loaded successfully: ${university.logoPath}`);
            this.style.display = 'block';
            fallbackDiv.style.display = 'none';
        };
        
        // Add both image and fallback to container
        logoContainer.appendChild(img);
        logoContainer.appendChild(fallbackDiv);
        
        // Create university name
        const nameDiv = document.createElement('div');
        nameDiv.className = 'university-name';
        nameDiv.textContent = university.name;
        
        // Create card content
        universityCard.innerHTML = `
            <div class="university-card-content">
                ${logoContainer.outerHTML}
                ${nameDiv.outerHTML}
            </div>
        `;
        
        universityGrid.appendChild(universityCard);
    });
    
    console.log('New universities rendered successfully');
}

// Banner Slider (same as before)
function initializeBannerSlider() {
    const banners = document.querySelectorAll('.hero-banner');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-banner');
    const nextBtn = document.getElementById('next-banner');
    
    if (banners.length === 0) return;
    
    let currentBanner = 0;
    const totalBanners = banners.length;
    
    let slideInterval = setInterval(nextSlide, 5000);
    
    function showBanner(index) {
        banners.forEach(banner => banner.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
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
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showBanner(index);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
    
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
    
    const filteredCourses = courses.filter(course => {
        if (filter === 'beginner') {
            return course.category.toLowerCase().includes('online');
        } else if (filter === 'top-rated') {
            return course.category.toLowerCase().includes('executive');
        } else if (filter === 'popular') {
            return parseFloat(course.fees.replace(/[₹,]/g, '')) < 200000;
        }
        return false;
    });
    
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
        
        const logoText = course.university.substring(0, 2);
        
        courseCard.innerHTML = `
            <div class="mba-card-header">
                <h3 class="mba-card-title">${course.courseName}</h3>
                <div class="mba-card-provider">
                    <span class="university-logo-small">${logoText}</span>
                    ${course.university}
                </div>
            </div>
            <div class="mba-card-body">
                <div class="mba-card-badges">
                    <span class="mba-badge level">
                        <i class="fas fa-clock"></i>
                        ${course.duration}
                    </span>
                    <span class="mba-badge duration">
                        <i class="fas fa-tag"></i>
                        ${course.category}
                    </span>
                </div>
                
                <div class="mt-4 mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 class="font-bold text-blue-800 mb-2 flex items-center">
                        <i class="fas fa-graduation-cap mr-2"></i> Eligibility
                    </h4>
                    <div class="text-sm text-gray-700 eligibility-content max-h-32 overflow-y-auto">
                        ${course.eligibility ? course.eligibility.replace(/\n/g, '<br>') : 'Check with university for eligibility criteria.'}
                    </div>
                </div>
                
                <div class="mba-card-price">
                    <div class="mba-price">${course.fees}</div>
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
    
    const existingSlides = slidesContainer.querySelectorAll('.testimonial-slide');
    existingSlides.forEach(slide => slide.remove());
    
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
        
        const dot = document.createElement('span');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.testimonial-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            showTestimonial(index);
        });
    });
    
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
    
    let testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 8000);
    
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
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Initialize counters for stats
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

// Initialize charts
function initializeCharts() {
    const categoriesCtx = document.getElementById('courseCategoriesChart');
    if (categoriesCtx) {
        const categoriesData = {
            labels: ['Business Analytics', 'Digital Marketing', 'Finance', 'Operations Management', 'Data Science', 'HR Management', 'Hospital Admin', 'Others'],
            datasets: [{
                data: [20, 18, 15, 12, 10, 8, 7, 10],
                backgroundColor: [
                    '#0ea5e9',
                    '#f59e0b',
                    '#ef4444',
                    '#10b981',
                    '#8b5cf6',
                    '#06b6d4',
                    '#ec4899',
                    '#94a3b8'
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
    
    const searchBtn = document.querySelector('.search-btn');
    const originalText = searchBtn.innerHTML;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
    searchBtn.disabled = true;
    
    setTimeout(() => {
        searchBtn.innerHTML = originalText;
        searchBtn.disabled = false;
        alert(`Searching for MBA programs: ${query}\n\nThis would show MBA search results in a real implementation.`);
    }, 1000);
}

// Optimize for mobile
function optimizeForMobile() {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    const interactiveElements = document.querySelectorAll('button, a, .university-card, .degree-card, .certification-card');
    interactiveElements.forEach(el => {
        el.style.webkitTapHighlightColor = 'transparent';
    });
    
    if (window.innerWidth < 768) {
        document.querySelectorAll('.text-4xl, .text-5xl').forEach(el => {
            if (el.classList.contains('text-4xl')) el.classList.replace('text-4xl', 'text-3xl');
            if (el.classList.contains('text-5xl')) el.classList.replace('text-5xl', 'text-3xl');
        });
    }
}

// Render MBA Specializations
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
                    <i class="fas ${specialization.icon} text-2xl"></i>
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

// Render MBA Courses
function renderMBACourses() {
    const coursesGrid = document.querySelector('.genai-courses-grid');
    if (!coursesGrid || !window.appData.mbaCourses) return;
    
    coursesGrid.innerHTML = '';
    
    window.appData.mbaCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'mba-square-card fade-in';
        
        const logoText = course.university.substring(0, 2);
        
        courseCard.innerHTML = `
            <div class="mba-card-header">
                <h3 class="mba-card-title">${course.courseName}</h3>
                <div class="mba-card-provider">
                    <span class="university-logo-small">${logoText}</span>
                    ${course.university}
                </div>
            </div>
            <div class="mba-card-body">
                <div class="mba-card-badges">
                    <span class="mba-badge level">
                        <i class="fas fa-clock"></i>
                        ${course.duration}
                    </span>
                    <span class="mba-badge duration">
                        <i class="fas fa-tag"></i>
                        ${course.category}
                    </span>
                </div>
                
                <div class="mt-4 mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 class="font-bold text-blue-800 mb-2 flex items-center">
                        <i class="fas fa-graduation-cap mr-2"></i> Eligibility
                    </h4>
                    <div class="text-sm text-gray-700 eligibility-content max-h-32 overflow-y-auto">
                        ${course.eligibility ? course.eligibility.replace(/\n/g, '<br>') : 'Check with university for eligibility criteria.'}
                    </div>
                </div>
                
                <div class="mba-card-price">
                    <div class="mba-price">${course.fees}</div>
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

// Render Testimonials
function renderTestimonials() {
    // Handled by initializeTestimonialSlider
}

// Render Blogs
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

// Brochure Modal functionality
function initializeBrochureModal() {
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
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const modal = document.getElementById('brochure-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const closeBtn = document.getElementById('close-modal');
    const submitBtn = document.getElementById('submit-brochure');
    const form = document.getElementById('brochure-form');
    
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    
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
            
            this.classList.toggle('compared');
            
            if (this.classList.contains('compared')) {
                this.innerHTML = '<i class="fas fa-check"></i> Added';
                this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                showNotification('Program added to compare list!', 'success');
            } else {
                this.innerHTML = courseType === 'course' ? '<i class="fas fa-plus"></i> Compare' : '<i class="fas fa-search"></i> Explore Programs';
                this.style.background = '';
                showNotification('Program removed from compare list.', 'info');
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ${type === 'success' ? 'bg-green-500' : 'bg-blue-500'} text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('translate-y-0');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('translate-y-0');
        notification.classList.add('translate-y-full');
        
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

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

// Fix for page load
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    
    // Force redraw for any rendering issues
    document.body.style.display = 'none';
    document.body.offsetHeight;
    document.body.style.display = '';
    
    window.scrollTo(0, 0);
    
    // Check if universities rendered
    setTimeout(() => {
        const universityCards = document.querySelectorAll('.university-card');
        console.log(`Found ${universityCards.length} university cards`);
        
        universityCards.forEach((card, index) => {
            const img = card.querySelector('img');
            if (img) {
                console.log(`Card ${index + 1} image src:`, img.src);
            }
        });
    }, 1000);
});