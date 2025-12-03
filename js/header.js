// js/header.js - MOBILE FRIENDLY WITH HORIZONTAL NAV
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="bg-white shadow-md sticky top-0 z-50">
                <nav class="container mx-auto px-3 py-3">
                    <!-- Mobile Layout (visible on all screens, but hidden on md+) -->
                    <div class="md:hidden">
                        <!-- Top Row: Logo and Sign Up -->
                        <div class="flex items-center justify-between mb-3">
                            <!-- Logo -->
                            <div class="flex items-center space-x-1">
                                <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                    <span class="text-white font-bold text-sm">TM</span>
                                </div>
                                <a href="/" class="text-base font-bold text-gray-800 whitespace-nowrap">
                                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">TopMBA</span>Online.in
                                </a>
                            </div>
                            
                            <!-- Sign Up Button (mobile) -->
                            <button class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:shadow-lg transition-all hover:from-blue-700 hover:to-blue-800 whitespace-nowrap">
                                Sign Up
                            </button>
                        </div>
                        
                        <!-- Horizontal Navigation Scroll (mobile) -->
                        <div class="overflow-x-auto pb-1 -mx-1 px-1">
                            <div class="flex space-x-4 min-w-max">
                                <a href="/" class="text-gray-700 hover:text-blue-600 font-medium text-xs whitespace-nowrap py-1">Home</a>
                                <a href="#featured-degrees" class="text-gray-700 hover:text-blue-600 font-medium text-xs whitespace-nowrap py-1">Programs</a>
                                <a href="#top-universities" class="text-gray-700 hover:text-blue-600 font-medium text-xs whitespace-nowrap py-1">Universities</a>
                                <a href="#why-us" class="text-gray-700 hover:text-blue-600 font-medium text-xs whitespace-nowrap py-1">Why Us</a>
                                <a href="#testimonials" class="text-gray-700 hover:text-blue-600 font-medium text-xs whitespace-nowrap py-1">Testimonials</a>
                                <a href="#blogs" class="text-gray-700 hover:text-blue-600 font-medium text-xs whitespace-nowrap py-1">Blog</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Desktop Layout (hidden on mobile) -->
                    <div class="hidden md:flex items-center justify-between">
                        <!-- Logo -->
                        <div class="flex items-center space-x-2">
                            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                <span class="text-white font-bold text-xl">TM</span>
                            </div>
                            <a href="/" class="text-2xl font-bold text-gray-800">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">TopMBA</span>Online.in
                            </a>
                        </div>
                        
                        <!-- Desktop Navigation -->
                        <div class="flex items-center space-x-8">
                            <a href="/" class="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                            <a href="#featured-degrees" class="text-gray-700 hover:text-blue-600 font-medium">Programs</a>
                            <a href="#top-universities" class="text-gray-700 hover:text-blue-600 font-medium">Universities</a>
                            <a href="#why-us" class="text-gray-700 hover:text-blue-600 font-medium">Why Us</a>
                            <a href="#testimonials" class="text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
                            <a href="#blogs" class="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
                            <button class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all hover:from-blue-700 hover:to-blue-800">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        `;
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                let targetElement;
                
                // Handle special case for duplicate IDs
                if (targetId === '#why-us') {
                    // For "Why Us" link, scroll to the grid layout section
                    targetElement = document.querySelector('#why-us');
                } else {
                    targetElement = document.querySelector(targetId);
                }
                
                if (targetElement) {
                    // Calculate offset based on header height
                    const headerHeight = document.querySelector('header').offsetHeight;
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight - 10,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Prevent horizontal scrollbar from showing on mobile navigation
        const mobileNav = document.querySelector('.overflow-x-auto');
        if (mobileNav) {
            mobileNav.addEventListener('wheel', function(e) {
                if (e.deltaY === 0) return;
                e.preventDefault();
                this.scrollLeft += e.deltaY;
            });
            
            // Hide scrollbar but keep functionality
            mobileNav.style.scrollbarWidth = 'none'; // Firefox
            mobileNav.style.msOverflowStyle = 'none'; // IE/Edge
            
            // For Chrome/Safari
            const style = document.createElement('style');
            style.innerHTML = `
                .overflow-x-auto::-webkit-scrollbar {
                    display: none;
                }
            `;
            document.head.appendChild(style);
        }
    }
});