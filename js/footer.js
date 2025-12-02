// js/footer.js
document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="bg-gray-900 text-white pt-12 pb-8">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                        <!-- Company Info -->
                        <div class="lg:col-span-2">
                            <div class="flex items-center space-x-2 mb-4">
                                <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                    <span class="text-white font-bold text-xl">TM</span>
                                </div>
                                <h2 class="text-2xl font-bold">
                                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">TopMBA</span>Online.in
                                </h2>
                            </div>
                            <p class="text-gray-400 mb-6">
                                India's Premier Platform for Comparing Online MBA Courses
                            </p>
                            <div class="flex items-center space-x-4 mb-6">
                                <a href="tel:+917780415466" class="text-gray-300 hover:text-white flex items-center space-x-2">
                                    <i class="fas fa-phone"></i>
                                    <span>+91 7780415466</span>
                                </a>
                            </div>
                            <div class="mb-6">
                                <a href="mailto:support@topmbaonline.in" class="text-gray-300 hover:text-white flex items-center space-x-2">
                                    <i class="fas fa-envelope"></i>
                                    <span>support@topmbaonline.in</span>
                                </a>
                            </div>
                            <div class="flex space-x-4">
                                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Company Links -->
                        <div>
                            <h3 class="text-lg font-bold mb-4">Company</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About us</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact us</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Blogs</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Become a provider</a></li>
                            </ul>
                        </div>
                        
                        <!-- Legal Links -->
                        <div>
                            <h3 class="text-lg font-bold mb-4">Legal</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Cookie Settings</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
                            </ul>
                        </div>
                        
                        <!-- Quick Links -->
                        <div>
                            <h3 class="text-lg font-bold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">MBA Career Counselling</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Resume Makeover</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Mock Interviews</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Alumni Network</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Top MBA Universities</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Course Categories -->
                    <div class="border-t border-gray-800 pt-8 mb-8">
                        <h3 class="text-lg font-bold mb-4">Top MBA Specializations</h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">MBA in Digital Marketing</a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">MBA in Business Analytics</a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">MBA in Hospital Administration</a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">MBA in Agribusiness</a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">MBA in Hospitality Management</a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">MBA in Petroleum Management</a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">Executive MBA</a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">MBA in Finance</a>
                        </div>
                    </div>
                    
                    <!-- Copyright -->
                    <div class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                        <p>&copy; ${new Date().getFullYear()} TopMBAOnline.in. All rights reserved.</p>
                        <p class="mt-2">India's Leading Platform for Comparing Online MBA Courses</p>
                    </div>
                </div>
            </footer>
        `;
    }
});