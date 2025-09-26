// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current page navigation
const currentLocation = location.pathname;
const menuItems = document.querySelectorAll('.nav-link');

menuItems.forEach(item => {
    if (item.getAttribute('href') === currentLocation.split('/').pop() || 
        (currentLocation === '/' && item.getAttribute('href') === 'index.html')) {
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Topic expansion functionality
function toggleTopic(button) {
    const topicCard = button.closest('.topic-card');
    const topicDetails = topicCard.querySelector('.topic-details');
    const icon = button.querySelector('i');
    
    if (topicDetails.classList.contains('expanded')) {
        topicDetails.classList.remove('expanded');
        button.classList.remove('expanded');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        topicDetails.classList.add('expanded');
        button.classList.add('expanded');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.topic-card, .speaker-card, .committee-member');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation (if forms are added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    return isValid;
}

// Utility function to format dates
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Utility function to debounce function calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search functionality (if search is implemented)
function initializeSearch() {
    const searchInput = document.querySelector('#search-input');
    if (searchInput) {
        const searchResults = document.querySelector('#search-results');
        
        const performSearch = debounce((query) => {
            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }
            
            // Simple search implementation
            const searchableElements = document.querySelectorAll('h1, h2, h3, p');
            const results = [];
            
            searchableElements.forEach(element => {
                if (element.textContent.toLowerCase().includes(query.toLowerCase())) {
                    results.push({
                        text: element.textContent.substring(0, 100) + '...',
                        element: element
                    });
                }
            });
            
            displaySearchResults(results, searchResults);
        }, 300);
        
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
}

function displaySearchResults(results, container) {
    if (results.length === 0) {
        container.innerHTML = '<p>No results found.</p>';
        return;
    }
    
    container.innerHTML = results.map(result => 
        `<div class="search-result">
            <p>${result.text}</p>
        </div>`
    ).join('');
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSearch);

// Print functionality
function printPage() {
    window.print();
}

// Share functionality
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}
