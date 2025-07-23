// Frames of Resin by Kavya - Main JavaScript

// Product data (simulating JSON file)
const businessData = {
  "business": {
    "name": "Frames of Resin by Kavya",
    "tagline": "Handcrafted Resin Art Creations",
    "description": "Creating beautiful, unique resin art pieces including keychains, rakhis, photo frames, and custom items. Each piece is handmade with love and attention to detail.",
    "whatsapp": "917893814751",
    "email": "framesofresinbykavya@gmail.com",
    "address": "Andhra Pradesh, India",
    "hours": "Mon-Sun: 10 AM - 7 PM"
  },
  "products": [
    {
      "id": "keychain-001",
      "name": "Floral Resin Keychain",
      "category": "Keychains",
      "price": 299,
      "description": "Beautiful handmade resin keychain with real dried flowers encased in clear resin. Perfect for gifting or personal use.",
      "colors": [
        {
          "name": "Pink",
          "code": "#FFB6C1",
          "images": ["https://via.placeholder.com/400x400/FFB6C1/FFFFFF?text=Pink+Floral+1", "https://via.placeholder.com/400x400/FFB6C1/FFFFFF?text=Pink+Floral+2", "https://via.placeholder.com/400x400/FFB6C1/FFFFFF?text=Pink+Floral+3"]
        },
        {
          "name": "Blue",
          "code": "#87CEEB",
          "images": ["https://via.placeholder.com/400x400/87CEEB/FFFFFF?text=Blue+Floral+1", "https://via.placeholder.com/400x400/87CEEB/FFFFFF?text=Blue+Floral+2", "https://via.placeholder.com/400x400/87CEEB/FFFFFF?text=Blue+Floral+3"]
        },
        {
          "name": "Purple",
          "code": "#DDA0DD",
          "images": ["https://via.placeholder.com/400x400/DDA0DD/FFFFFF?text=Purple+Floral+1", "https://via.placeholder.com/400x400/DDA0DD/FFFFFF?text=Purple+Floral+2", "https://via.placeholder.com/400x400/DDA0DD/FFFFFF?text=Purple+Floral+3"]
        }
      ],
      "featured": false
    },
    {
      "id": "rakhi-001",
      "name": "Traditional Resin Rakhi",
      "category": "Rakhis",
      "price": 199,
      "description": "Unique resin rakhi with traditional Indian motifs. Handcrafted with intricate designs and vibrant colors.",
      "colors": [
        {
          "name": "Gold",
          "code": "#FFD700",
          "images": ["assets/rakhi.png", "https://via.placeholder.com/400x400/FFD700/000000?text=Gold+Rakhi+2"]
        },
        {
          "name": "Silver",
          "code": "#C0C0C0",
          "images": ["https://via.placeholder.com/400x400/C0C0C0/000000?text=Silver+Rakhi+1", "https://via.placeholder.com/400x400/C0C0C0/000000?text=Silver+Rakhi+2"]
        }
      ],
      "featured": true
    },
    {
      "id": "frame-001",
      "name": "Ocean Wave Photo Frame",
      "category": "Photo Frames",
      "price": 899,
      "description": "Stunning resin photo frame with ocean wave design. Perfect for displaying your favorite memories.",
      "colors": [
        {
          "name": "Ocean Blue",
          "code": "#006994",
          "images": ["assets/photoframe.png", "https://via.placeholder.com/400x400/006994/FFFFFF?text=Ocean+Blue+2", "https://via.placeholder.com/400x400/006994/FFFFFF?text=Ocean+Blue+3", "https://via.placeholder.com/400x400/006994/FFFFFF?text=Ocean+Blue+4"]
        },
        {
          "name": "Turquoise",
          "code": "#40E0D0",
          "images": ["https://via.placeholder.com/400x400/40E0D0/000000?text=Turquoise+1", "https://via.placeholder.com/400x400/40E0D0/000000?text=Turquoise+2", "https://via.placeholder.com/400x400/40E0D0/000000?text=Turquoise+3"]
        }
      ],
      "featured": true
    },
    {
      "id": "keychain-002",
      "name": "Galaxy Resin Keychain",
      "category": "Keychains",
      "price": 349,
      "description": "Mesmerizing galaxy-themed resin keychain with glitter and cosmic colors. A perfect piece of the universe in your pocket.",
      "colors": [
        {
          "name": "Deep Purple",
          "code": "#4B0082",
          "images": ["assets/keychain.png", "https://via.placeholder.com/400x400/4B0082/FFFFFF?text=Deep+Purple+2"]
        },
        {
          "name": "Cosmic Blue",
          "code": "#191970",
          "images": ["https://via.placeholder.com/400x400/191970/FFFFFF?text=Cosmic+Blue+1", "https://via.placeholder.com/400x400/191970/FFFFFF?text=Cosmic+Blue+2"]
        }
      ],
      "featured": true
    },
    {
      "id": "rakhi-002",
      "name": "Modern Geometric Rakhi",
      "category": "Rakhis",
      "price": 249,
      "description": "Contemporary resin rakhi with geometric patterns and modern design elements.",
      "colors": [
        {
          "name": "Rose Gold",
          "code": "#E8B4B8",
          "images": ["https://via.placeholder.com/400x400/E8B4B8/000000?text=Rose+Gold+1", "https://via.placeholder.com/400x400/E8B4B8/000000?text=Rose+Gold+2"]
        },
        {
          "name": "Black",
          "code": "#000000",
          "images": ["https://via.placeholder.com/400x400/000000/FFFFFF?text=Black+1", "https://via.placeholder.com/400x400/000000/FFFFFF?text=Black+2"]
        }
      ],
      "featured": false
    },
    {
      "id": "coaster-001",
      "name": "Marble Effect Coasters Set",
      "category": "Others",
      "price": 599,
      "description": "Set of 4 elegant resin coasters with marble effect. Perfect for protecting your furniture with style.",
      "colors": [
        {
          "name": "White Marble",
          "code": "#F8F8FF",
          "images": ["https://via.placeholder.com/400x400/F8F8FF/000000?text=White+Marble+1", "https://via.placeholder.com/400x400/F8F8FF/000000?text=White+Marble+2", "https://via.placeholder.com/400x400/F8F8FF/000000?text=White+Marble+3"]
        },
        {
          "name": "Black Marble",
          "code": "#36454F",
          "images": ["https://via.placeholder.com/400x400/36454F/FFFFFF?text=Black+Marble+1", "https://via.placeholder.com/400x400/36454F/FFFFFF?text=Black+Marble+2"]
        }
      ],
      "featured": false
    }
  ],
  "categories": ["All", "Keychains", "Rakhis", "Photo Frames", "Others"]
};

// Global variables
let currentProducts = businessData.products;
let currentProduct = null;
let currentColorIndex = 0;
let currentImageIndex = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadFeaturedProducts();
    loadAllProducts();
    showSection('home');
}

function setupEventListeners() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Navigation links - main nav
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            if (section) {
                showSection(section);
            }
        });
    });
    
    // Footer navigation links
    document.querySelectorAll('a[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            const category = this.getAttribute('data-category');
            
            if (section) {
                showSection(section);
                
                // Handle category filter for footer links
                if (category && section === 'products') {
                    setTimeout(() => {
                        handleCategoryFilter(category);
                    }, 100);
                }
            }
        });
    });
    
    // Hero section buttons
    document.querySelectorAll('[data-section="products"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('products');
        });
    });
    
    // WhatsApp buttons
    document.querySelectorAll('.whatsapp-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const message = "Hi! I'd like to know more about your resin art products.";
            const whatsappUrl = `https://wa.me/${businessData.business.whatsapp}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
    
    // Contact Us button in hero
    document.querySelector('.btn--outline').addEventListener('click', function(e) {
        e.preventDefault();
        const message = "Hi! I'd like to know more about your resin art products.";
        const whatsappUrl = `https://wa.me/${businessData.business.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            handleCategoryFilter(category);
            
            // Update active state
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Modal controls
    const productModal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const modalBackdrop = document.getElementById('modalBackdrop');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !productModal.classList.contains('hidden')) {
            closeModal();
        }
        
        // Handle keyboard navigation in modal
        if (!productModal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
            }
        }
    });
}

function showSection(sectionName) {
    // Update navigation active state
    document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionName) {
            link.classList.add('active');
        }
    });
    
    // Show/hide sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
        if (section.id === sectionName) {
            section.classList.remove('hidden');
        }
    });
    
    // Close mobile menu if open
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    if (navToggle) {
        navToggle.classList.remove('active');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadFeaturedProducts() {
    const featuredProducts = businessData.products.filter(product => product.featured);
    const featuredProductsGrid = document.getElementById('featuredProducts');
    if (featuredProductsGrid) {
        renderProducts(featuredProducts, featuredProductsGrid);
    }
}

function loadAllProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        renderProducts(currentProducts, productsGrid);
    }
}

function renderProducts(products, container) {
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.setAttribute('data-product-id', product.id);
    
    const firstColor = product.colors[0];
    const firstImage = firstColor.images[0];
    
    card.innerHTML = `
        <div class="product-card__image">
            <img src="${firstImage}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-card__image-placeholder" style="display: none;">${product.name}</div>
        </div>
        <div class="product-card__content">
            <h4 class="product-card__name">${product.name}</h4>
            <p class="product-card__price">₹${product.price}</p>
            <p class="product-card__category">${product.category}</p>
            <div class="product-card__colors">
                ${product.colors.map(color => `
                    <div class="color-dot" style="background-color: ${color.code}" title="${color.name}"></div>
                `).join('')}
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openProductModal(product));
    
    return card;
}

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        currentProducts = businessData.products;
    } else {
        currentProducts = businessData.products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    }
    
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        renderProducts(currentProducts, productsGrid);
    }
}

function handleCategoryFilter(category) {
    if (category === 'All') {
        currentProducts = businessData.products;
    } else {
        currentProducts = businessData.products.filter(product => product.category === category);
    }
    
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        renderProducts(currentProducts, productsGrid);
    }
    
    // Update filter button state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
}

function openProductModal(product) {
    currentProduct = product;
    currentColorIndex = 0;
    currentImageIndex = 0;
    
    // Populate modal content
    const productName = document.getElementById('productName');
    const productPrice = document.getElementById('productPrice');
    const productDescription = document.getElementById('productDescription');
    
    if (productName) productName.textContent = product.name;
    if (productPrice) productPrice.textContent = `₹${product.price}`;
    if (productDescription) productDescription.textContent = product.description;
    
    // Setup colors
    setupProductColors();
    
    // Setup carousel
    setupCarousel();
    
    // Setup WhatsApp button
    setupWhatsAppButton();
    
    // Show modal
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function setupProductColors() {
    const colorsContainer = document.getElementById('colorOptions');
    if (!colorsContainer || !currentProduct) return;
    
    colorsContainer.innerHTML = '';
    
    currentProduct.colors.forEach((color, index) => {
        const colorOption = document.createElement('div');
        colorOption.className = `color-option ${index === currentColorIndex ? 'active' : ''}`;
        colorOption.innerHTML = `
            <div class="color-option__dot" style="background-color: ${color.code}"></div>
            <span class="color-option__name">${color.name}</span>
        `;
        
        colorOption.addEventListener('click', () => {
            currentColorIndex = index;
            currentImageIndex = 0;
            updateColorSelection();
            updateCarousel();
            setupWhatsAppButton(); // Update WhatsApp button with new color
        });
        
        colorsContainer.appendChild(colorOption);
    });
}

function updateColorSelection() {
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach((option, index) => {
        option.classList.toggle('active', index === currentColorIndex);
    });
}

function setupCarousel() {
    updateCarousel();
    setupCarouselControls();
}

function updateCarousel() {
    if (!currentProduct) return;
    
    const currentColor = currentProduct.colors[currentColorIndex];
    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!track || !dotsContainer) return;
    
    // Clear existing content
    track.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Add slides
    currentColor.images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel__slide';
        slide.innerHTML = `
            <img src="${image}" alt="${currentProduct.name} - ${currentColor.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="carousel__slide-placeholder" style="display: none;">${currentProduct.name} - ${currentColor.name}</div>
        `;
        track.appendChild(slide);
        
        // Add dot
        const dot = document.createElement('div');
        dot.className = `carousel__dot ${index === currentImageIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Update position
    updateCarouselPosition();
}

function setupCarouselControls() {
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
}

function updateCarouselPosition() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;
    
    const translateX = -currentImageIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;
    
    // Update dots
    const dots = document.querySelectorAll('.carousel__dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageIndex);
    });
}

function prevSlide() {
    if (!currentProduct) return;
    
    const currentColor = currentProduct.colors[currentColorIndex];
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = currentColor.images.length - 1;
    }
    updateCarouselPosition();
}

function nextSlide() {
    if (!currentProduct) return;
    
    const currentColor = currentProduct.colors[currentColorIndex];
    if (currentImageIndex < currentColor.images.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    updateCarouselPosition();
}

function goToSlide(index) {
    currentImageIndex = index;
    updateCarouselPosition();
}

function setupWhatsAppButton() {
    const whatsappBtn = document.getElementById('whatsappOrder');
    if (!whatsappBtn || !currentProduct) return;
    
    const currentColor = currentProduct.colors[currentColorIndex];
    
    const message = `Hi! I'm interested in ${currentProduct.name} in ${currentColor.name} for ₹${currentProduct.price}. Please share more details.`;
    
    whatsappBtn.onclick = () => {
        const whatsappUrl = `https://wa.me/${businessData.business.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
}

function closeModal() {
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.classList.add('hidden');
        document.body.style.overflow = '';
        currentProduct = null;
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        message: document.getElementById('contactMessage').value,
        timestamp: new Date().toISOString()
    };
    
    // Show success message
    showStatusMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
    
    // Reset form
    e.target.reset();
    
    // Optionally redirect to WhatsApp
    setTimeout(() => {
        const whatsappMessage = `Hi! I just submitted a contact form. Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`;
        const whatsappUrl = `https://wa.me/${businessData.business.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    }, 2000);
}

function showStatusMessage(message, type) {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    const statusDiv = document.createElement('div');
    statusDiv.className = `status-message status-message--${type}`;
    statusDiv.textContent = message;
    
    // Insert after form
    contactForm.parentNode.insertBefore(statusDiv, contactForm.nextSibling);
    
    // Remove after 5 seconds
    setTimeout(() => {
        statusDiv.remove();
    }, 5000);
}

// Touch/swipe support for carousel
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('productCarousel');
    if (carousel) {
        carousel.addEventListener('touchstart', handleTouchStart, {passive: true});
        carousel.addEventListener('touchend', handleTouchEnd, {passive: true});
    }
});

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide(); // Swipe left - next image
        } else {
            prevSlide(); // Swipe right - previous image
        }
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Observe elements for animations
    const observeElements = document.querySelectorAll('.product-card, .feature, .contact__item');
    observeElements.forEach(el => observer.observe(el));
});

// Export functions for potential testing
window.FramesOfResin = {
    businessData,
    openProductModal,
    closeModal,
    showSection,
    handleSearch,
    handleCategoryFilter
};