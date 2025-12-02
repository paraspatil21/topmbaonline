// js/header.js
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="bg-white shadow-md sticky top-0 z-50">
                <nav class="container mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <!-- Logo -->
                        <div class="flex items-center space-x-2">
                            <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                <span class="text-white font-bold text-xl">TM</span>
                            </div>
                            <a href="/" class="text-2xl font-bold text-gray-800">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">TopMBA</span>Online.in
                            </a>
                        </div>
                        
                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="/" class="text-gray-700 hover:text-purple-600 font-medium">Home</a>
                            <a href="#featured-degrees" class="text-gray-700 hover:text-purple-600 font-medium">Programs</a>
                            <a href="#top-universities" class="text-gray-700 hover:text-purple-600 font-medium">Universities</a>
                            <a href="#why-us" class="text-gray-700 hover:text-purple-600 font-medium">Why Us</a>
                            <a href="#testimonials" class="text-gray-700 hover:text-purple-600 font-medium">Testimonials</a>
                            <a href="#blogs" class="text-gray-700 hover:text-purple-600 font-medium">Blog</a>
                            <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                                Sign Up
                            </button>
                        </div>
                        
                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-button" class="md:hidden text-gray-700">
                            <i class="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                    
                    <!-- Mobile Menu -->
                    <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4 border-t pt-4">
                        <div class="flex flex-col space-y-4">
                            <a href="/" class="text-gray-700 hover:text-purple-600 font-medium py-2">Home</a>
                            <a href="#featured-degrees" class="text-gray-700 hover:text-purple-600 font-medium py-2">Programs</a>
                            <a href="#top-universities" class="text-gray-700 hover:text-purple-600 font-medium py-2">Universities</a>
                            <a href="#why-us" class="text-gray-700 hover:text-purple-600 font-medium py-2">Why Us</a>
                            <a href="#testimonials" class="text-gray-700 hover:text-purple-600 font-medium py-2">Testimonials</a>
                            <a href="#blogs" class="text-gray-700 hover:text-purple-600 font-medium py-2">Blog</a>
                            <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium w-full">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        `;
        
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                const icon = mobileMenuButton.querySelector('i');
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            });
        }
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        const icon = mobileMenuButton.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
});