// --- PRODUCT DATABASE (Local + Default) ---
const DEFAULT_PRODUCTS = [
    { id: 1, name: "Wurood", price: "2999", category: "Premium Fragrance", image: "assets/images/wurood-rs-2999.jpeg" },
    { id: 2, name: "Black Scent", price: "1899", category: "Premium Fragrance", image: "assets/images/black-scent-rs-1899.jpeg" },
    { id: 3, name: "ROMANCE", price: "2999", category: "Premium Fragrance", image: "assets/images/romance-2999.jpeg" },
    { id: 4, name: "Tiger Black", price: "1799", category: "Premium Fragrance", image: "assets/images/tiger-black-rs-1799.jpeg" },
    { id: 5, name: "AL-WATANI", price: "1799", category: "Premium Fragrance", image: "assets/images/al-watani-rs-1799.jpeg" },
    { id: 6, name: "Noble Man", price: "1999", category: "Premium Fragrance", image: "assets/images/noble-man-rs-1999.jpeg" },
    { id: 7, name: "DIVINE", price: "1699", category: "Premium Fragrance", image: "assets/images/divine-rs-1699.jpeg" },
    { id: 8, name: "HISTORY", price: "2499", category: "Premium Fragrance", image: "assets/images/history-rs-2499.jpeg" },
    { id: 9, name: "MAXI", price: "4999", category: "Premium Fragrance", image: "assets/images/maxi-rs-4999.jpeg" },
    { id: 10, name: "NTA By BLAZER", price: "1599", category: "Premium Fragrance", image: "assets/images/nta-by-blazer-rs-1599.jpeg" },
    { id: 11, name: "TEA ROSE MESK", price: "1999", category: "Premium Fragrance", image: "assets/images/tea-rose-mesk-rs-1999.jpeg" },
    { id: 12, name: "MUSK AL-HAWAMEER", price: "2499", category: "Premium Fragrance", image: "assets/images/musk-al-hawameer-rs-2499.jpeg" },
    { id: 13, name: "NAJOOM", price: "1699", category: "Premium Fragrance", image: "assets/images/najoom-rs-1699.jpeg" },
    { id: 14, name: "MARQUIS", price: "3799", category: "Premium Fragrance", image: "assets/images/marquis-rs-3799.jpeg" },
    { id: 15, name: "KHUMAR", price: "4499", category: "Premium Fragrance", image: "assets/images/khumaar-rs-4499.jpeg" },
    { id: 16, name: "JANAN SPORT By J.", price: "6299", category: "Premium Fragrance", image: "assets/images/janan-sports-by-j.-rs-6299.jpeg" },
    { id: 17, name: "JANAN OUD By J.", price: "6299", category: "Premium Fragrance", image: "assets/images/janan-oud-by-j.-rs-6299.jpeg" },
    { id: 18, name: "WHITE MUSK BY J.", price: "4999", category: "Premium Fragrance", image: "assets/images/white-musk-rs-4999.jpeg" },
    { id: 19, name: "MARJ By AHMED AL-MAGHRABI", price: "13999", category: "Premium Fragrance", image: "assets/images/marj-by-ahmed-al-maghrabi-rs-13999.jpeg" },
    { id: 20, name: "KAAF", price: "6999", category: "Premium Fragrance", image: "assets/images/kaaf-rs-699.jpeg" },
    { id: 21, name: "Blue Lady", price: "2999", category: "Premium Fragrance", image: "assets/images/blue-lady-rs-2999.jpeg" },
    { id: 22, name: "AL-FARAS", price: "3499", category: "Premium Fragrance", image: "assets/images/al-faras-rs3499.jpeg" },
    { id: 23, name: "LAMSAT HARIR", price: "2999", category: "Premium Fragrance", image: "assets/images/lamsat-harir-rs--2999.jpeg" },
    { id: 24, name: "MOUSOF", price: "3999", category: "Premium Fragrance", image: "assets/images/mousof-rs-3999.jpeg" },
    { id: 25, name: "OUD HAYAT", price: "2999", category: "Premium Fragrance", image: "assets/images/oud-hayat-rs-2999.jpeg" },
    { id: 26, name: "UROOSA By J.", price: "3499", category: "Premium Fragrance", image: "assets/images/uroosa-by-j.-rs-3499.jpeg" },
    { id: 27, name: "Wurood 4 by Rasasi", price: "4499", category: "Premium Fragrance", image: "assets/images/wardat-4-by-rasasi-rs-4499.jpeg" },
    { id: 28, name: "Musk Silk Ajmal", price: "4999", category: "Attar", image: "assets/images/musk-silk-ajmal-rs-4999.jpeg" },
    { id: 29, name: "Applause", price: "2999", category: "Attar", image: "assets/images/applause-12ml-rs-2999.jpeg" },
    { id: 30, name: "Ashwaaq", price: "2599", category: "Attar", image: "assets/images/ashwaaq-12ml-rs-2599.jpeg" },
    { id: 31, name: "Lucky", price: "2799", category: "Attar", image: "assets/images/lucky-12ml-rs-2799.jpeg" },
    { id: 32, name: "Malika", price: "3599", category: "Attar", image: "assets/images/malika-12ml-rs-3599.jpeg" },
    { id: 33, name: "Musk Rose", price: "3499", category: "Attar", image: "assets/images/musk-rose-12ml-rs-3499.jpeg" },
    { id: 34, name: "Oud E Aswad", price: "5999", category: "Attar", image: "assets/images/oud-e-aswad-12ml-rs-5999.jpeg" },
    { id: 35, name: "Oudh O Oudh", price: "3999", category: "Attar", image: "assets/images/oudh-o-oudh-12ml-rs-3999.jpeg" },
    { id: 36, name: "Sweet Oud", price: "3499", category: "Attar", image: "assets/images/sweet-oud-12ml-rs-3499.jpeg" },
    { id: 37, name: "Ward No 1", price: "1599", category: "Attar", image: "assets/images/ward-no1-12ml-rs-1599.jpeg" },
    { id: 38, name: "Ward E Khaas", price: "1999", category: "Attar", image: "assets/images/ward-e-khaas-12ml-rs1999.jpeg" },
    { id: 39, name: "Amber Oud", price: "3499", category: "Attar", brand: "Surrati", image: "assets/images/amber-oud-by-surrati-rs-3499.jpeg" },
    { id: 40, name: "Banafsaji", price: "3499", category: "Attar", brand: "Surrati", image: "assets/images/banafsaji-by-surrati-rs-3499.jpeg" },
    { id: 41, name: "Black Oud", price: "3499", category: "Attar", brand: "Surrati", image: "assets/images/black-oud-by-surrati-rs-3499.jpeg" },
    { id: 42, name: "Dehan Oud Ateeq", price: "5999", category: "Attar", brand: "Surrati", image: "assets/images/dehan-oud-ateeq-by-surrati-rs-5999.jpeg" },
    { id: 43, name: "Musk Al-Bait", price: "5999", category: "Attar", brand: "Surrati", image: "assets/images/musk-al-bait-by-surrati-rs-5999.jpeg" },
    { id: 44, name: "White Oud", price: "3499", category: "Attar", brand: "Surrati", image: "assets/images/white-oud-by-surrati-rs-3499.jpeg" },
    { id: 45, name: "Afnan Premium", price: "2799", category: "Afnan", image: "assets/images/afnan.jpeg" },
    { id: 46, name: "Dehan Al-Oud Abiyad", price: "2799", category: "Afnan", image: "assets/images/dehan-al-oud-abiyad-rs-by-afnan-rs-2799.jpeg" },
    { id: 47, name: "Mukhallat Abiyad", price: "2799", category: "Afnan", image: "assets/images/mukhallat-abiyad-by-afnan-rs-2799.jpeg" },
    { id: 48, name: "Musk Abiyad", price: "2799", category: "Afnan", image: "assets/images/musk-abiyad-by-afnan-rs-2799.jpeg" },
    { id: 49, name: "Alifun Lailatun Wa Lailah", price: "2799", category: "Attar", isNew: true, image: "assets/images/alifun-lailatun--wa-lailah-12ml-rs-2799.jpeg" },
    { id: 50, name: "Ameer Ul Oud", price: "1499", category: "Attar", isNew: true, image: "assets/images/ameer-ul-oud-12ml-rs-1499.jpeg" },
    { id: 51, name: "Aventus Creed", price: "1699", category: "Attar", isNew: true, image: "assets/images/aventus-creed-12ml-rs-1699.jpeg" },
    { id: 52, name: "Bad E Saba", price: "1599", category: "Attar", isNew: true, image: "assets/images/bad-e-saba-12ml-rs-1599.jpeg" },
    { id: 53, name: "Bakarat", price: "1599", category: "Attar", isNew: true, image: "assets/images/bakarat-12ml-rs-1599.jpeg" },
    { id: 54, name: "Dehan Oud Combodi", price: "7999", category: "Attar", isNewArrival: true, image: "assets/images/dehan-oud-combodi-12ml-rs-7999.jpeg" },
    { id: 55, name: "David Beckham", price: "1599", category: "Attar", isNewArrival: true, image: "assets/images/david-beckham-12ml-rs-1599.jpeg" },
    { id: 56, name: "Ehsaas", price: "1399", category: "Attar", isNewArrival: true, image: "assets/images/ehsaas-12ml-rs-1399.jpeg" },
    { id: 57, name: "Fogg", price: "1499", category: "Attar", isNewArrival: true, image: "assets/images/fogg-12ml-rs-1499.jpeg" },
    { id: 58, name: "Gucci Flora", price: "1099", category: "Attar", isNew: true, image: "assets/images/gucci-flora-12ml-rs-1099.jpeg" },
    { id: 59, name: "Husn E Yousuf", price: "1599", category: "Attar", isNew: true, image: "assets/images/husn-e-yousuf-12ml-rs-1599.jpeg" },
    { id: 60, name: "Janan Sports", price: "1499", category: "Attar", isNew: true, image: "assets/images/janan-sports-12ml-rs-1499.jpeg" },
    { id: 61, name: "Khas Special", price: "5999", category: "Attar", isNewArrival: true, image: "assets/images/khas-special-12ml-rs-5999.jpeg" },
    { id: 62, name: "Marj", price: "1699", category: "Attar", isNew: true, image: "assets/images/marj-12ml-rs-1699-(2).jpeg" },
    { id: 63, name: "Mukhallat Oud Rose", price: "2399", category: "Attar", isNew: true, image: "assets/images/mukhallat-oud-rose-12ml-rs-2399.jpeg" },
    { id: 64, name: "Mukhallat Oud", price: "2799", category: "Attar", isNewArrival: true, image: "assets/images/mukhallat-oud--rs-2799.jpeg" },
    { id: 65, name: "Office Man", price: "1999", category: "Attar", isNewArrival: true, image: "assets/images/office-man-12ml-rs-1999.jpeg" },
    { id: 66, name: "One Man Show", price: "999", category: "Attar", isNewArrival: true, image: "assets/images/one-man-show-12ml-rs-999.jpeg" },
    { id: 67, name: "Oud Asfahan", price: "1799", category: "Attar", isNewArrival: true, image: "assets/images/oud-asfahan-12ml-rs-1799.jpeg" },
    { id: 68, name: "Oud Mood", price: "3799", category: "Attar", isNewArrival: true, image: "assets/images/oud-mood-12ml-rs-3799.jpeg" },
    { id: 69, name: "Oud for Greatness", price: "1599", category: "Attar", isNewArrival: true, image: "assets/images/oud-for-greatness-12ml-rs-1599.jpeg" },
    { id: 70, name: "Qissa", price: "1999", category: "Attar", isNewArrival: true, image: "assets/images/qissa-12ml-rs-1999.jpeg" },
    { id: 71, name: "Sewaaj", price: "1399", category: "Attar", isNewArrival: true, image: "assets/images/sewaaj-12ml-rs-1399.jpeg" },
    { id: 72, name: "Shamamat Ul Amber", price: "4999", category: "Attar", isNewArrival: true, image: "assets/images/shamamat-ul-amber-12ml-rs-4999.jpeg" },
    { id: 73, name: "Sheikh Ul Haramain", price: "1599", category: "Attar", isNewArrival: true, image: "assets/images/sheikh-ul-haramain-12ml-rs-1599.jpeg" },
    { id: 74, name: "Rashaa", price: "1299", category: "Attar", isFreshAttar: true, image: "assets/images/rashaa-12ml-rs-1299.jpeg" },
    { id: 75, name: "Rasmi", price: "1999", category: "Attar", isFreshAttar: true, image: "assets/images/rasmi-20ml-rs-1999.jpeg" },
    { id: 76, name: "Sigaar", price: "1599", category: "Attar", isFreshAttar: true, image: "assets/images/sigaar-12ml-rs-1599.jpeg" },
    { id: 77, name: "Tara", price: "1399", category: "Attar", isFreshAttar: true, image: "assets/images/tara-12ml-rs-1399.jpeg" },
    { id: 78, name: "Tiger", price: "1199", category: "Attar", isFreshAttar: true, image: "assets/images/tiger-12ml-rs-1199.jpeg" },
    { id: 79, name: "White Oud 12ml", price: "1399", category: "Attar", isFreshAttar: true, image: "assets/images/white-oud-12ml-rs-1399.jpeg" },
    { id: 80, name: "Zarar", price: "1299", category: "Attar", isFreshAttar: true, image: "assets/images/zarar-12ml-rs-1299.jpeg" },
    { id: 81, name: "Ali Asghar", price: "799", category: "Body Spray", image: "assets/images/ali-asghar-rs-799.jpeg" },
    { id: 82, name: "Blue Lady By Rasasi", price: "799", category: "Body Spray", image: "assets/images/blue-lady-by-rasasi-rs-799.jpeg" },
    { id: 83, name: "Body Spray By J.", price: "899", category: "Body Spray", image: "assets/images/body-spray-by-j.-.jpeg" },
    { id: 84, name: "Body Spray By Lattafa", price: "950", category: "Body Spray", image: "assets/images/body-spray-by-lattafa-rs-950.jpeg" },
    { id: 85, name: "Body Spray", price: "850", category: "Body Spray", image: "assets/images/body-spray-rs-850.jpeg" },
    { id: 86, name: "Fogg Body Spray", price: "799", category: "Body Spray", image: "assets/images/fogg-rs-799.jpeg" },
    { id: 87, name: "Janan Sport By J.", price: "899", category: "Body Spray", image: "assets/images/janan-sport-by-j.-rs-899.jpeg" },
    { id: 88, name: "Khumar By J.", price: "899", category: "Body Spray", image: "assets/images/khumar-by-j.-rs-899.jpeg" },
    { id: 89, name: "Room Freshner", price: "850", category: "Body Spray", image: "assets/images/room-freshner-rs-850.jpeg" },
    { id: 90, name: "White Musk By J.", price: "899", category: "Body Spray", image: "assets/images/white-musk-by-j.--rs-899.jpeg" }
];

// ============================================================
// VERSION STAMP â€” bump this string whenever products change
// so stale localStorage is automatically wiped on next load
// ============================================================
const CACHE_VERSION = '2.8';
if (localStorage.getItem('musa_cache_v') !== CACHE_VERSION) {
    localStorage.removeItem('musa_products');
    localStorage.setItem('musa_cache_v', CACHE_VERSION);
}

let products = JSON.parse(localStorage.getItem('musa_products')) || [];


// AUTO-SYNC: Add missing default products and remove specific excluded products
let updated = false;

// CRITICAL: Filter out any legacy "Wardat 4 By Rasasi" so it's replaced by the new "Wurood 4 by Rasasi"
const legacyNames = ["Wardat 4 By Rasasi", "WARDAT 4 By RASASI"];
const initialLength = products.length;
products = products.filter(p => !legacyNames.includes(p.name));

// Ensure no duplicate "Wurood 4 by Rasasi" in Premium Fragrance or Attar
// We keep only the one from DEFAULT_PRODUCTS during next sync
products = products.filter(p => p.name !== "Wurood 4 by Rasasi");

if (products.length !== initialLength) updated = true;

DEFAULT_PRODUCTS.forEach(defaultProd => {
    let existing = products.find(p => p.name === defaultProd.name && p.category === defaultProd.category);
    if (!existing) {
        products.push(defaultProd);
        updated = true;
    } else {
        // Ensure critical flags like isNew, isNewArrival, and brand are always synced
        let changed = false;
        if (existing.isNew !== defaultProd.isNew) { existing.isNew = defaultProd.isNew; changed = true; }
        if (existing.isNewArrival !== defaultProd.isNewArrival) { existing.isNewArrival = defaultProd.isNewArrival; changed = true; }
        if (existing.isFreshAttar !== defaultProd.isFreshAttar) { existing.isFreshAttar = defaultProd.isFreshAttar; changed = true; }
        if (existing.brand !== defaultProd.brand) { existing.brand = defaultProd.brand; changed = true; }
        if (changed) updated = true;
    }
});

if (updated || !localStorage.getItem('musa_products')) {
    localStorage.setItem('musa_products', JSON.stringify(products));
}

// Sync helper
function saveProductsToStorage() {
    localStorage.setItem('musa_products', JSON.stringify(products));
}

// ============================================================
// CART STATE â€” initialized here so it's always ready
// ============================================================
let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('musa_cart')) || [];
    if (!Array.isArray(cart)) cart = [];
} catch(e) {
    cart = [];
}

function saveCart() {
    try { localStorage.setItem('musa_cart', JSON.stringify(cart)); } catch(e) {}
}

// --- ADMIN LIVE WIDGET ---
function initAdminWidget() {
    if (sessionStorage.getItem('admin_auth') !== 'granted') return;

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const widget = document.createElement('div');
    widget.id = 'admin-live-widget';
    widget.innerHTML = `
        <a href="admin.html" class="widget-circle">
            <i class="fa-solid fa-chart-line"></i>
            <span class="count-badge">${orders.length}</span>
        </a>
        <div class="widget-label">Admin: ${orders.length} Orders</div>
    `;
    document.body.appendChild(widget);
}

// --- RENDERING ---
function renderProducts() {
    const row1Grid = document.getElementById('shop-grid-row-1');
    const row2Grid = document.getElementById('shop-grid-row-2');
    const ajmalGrid = document.getElementById('ajmal-perfume-grid');
    const perfumeGrid = document.getElementById('perfume-full-grid');
    const attarGrid = document.getElementById('attar-full-grid');
    const newAttarGrid = document.getElementById('new-attar-grid');
    const newArrivalsGrid = document.getElementById('new-arrivals-grid');
    const freshAttarsGrid = document.getElementById('fresh-attars-grid');
    const bodySprayGrid = document.getElementById('body-spray-grid');
    const bodySprayFullGrid = document.getElementById('body-spray-full-grid');
    
    if (newAttarGrid) {
        const newAttars = products.filter(p => p.isNew);
        newAttarGrid.innerHTML = newAttars.map(p => generateProductCard(p)).join('');
        initAnimations();
    }

    if (newArrivalsGrid) {
        const newArrivals = products.filter(p => p.isNewArrival);
        newArrivalsGrid.innerHTML = newArrivals.map(p => generateProductCard(p)).join('');
        initAnimations();
    }

    if (freshAttarsGrid) {
        const freshAttars = products.filter(p => p.isFreshAttar);
        freshAttarsGrid.innerHTML = freshAttars.map(p => generateProductCard(p)).join('');
        initAnimations();
    }

    const perfumesOnly = products.filter(p => !p.category || p.category === 'Premium Fragrance');
    const half = Math.ceil(perfumesOnly.length / 2);
    
    if (row1Grid) {
        row1Grid.innerHTML = perfumesOnly.slice(0, half).map(p => generateProductCard(p)).join('');
        initAnimations();
    }
    
    if (row2Grid) {
        row2Grid.innerHTML = perfumesOnly.slice(half).map(p => generateProductCard(p)).join('');
        initAnimations();
    }

    if (ajmalGrid) {
        // Ajmal/Generic Attars (exclude Surrati and dynamically added new Attars)
        const ajmalProducts = products.filter(p => p.category === 'Attar' && p.brand !== 'Surrati' && !p.isNew && !p.isNewArrival && !p.isFreshAttar);
        ajmalGrid.innerHTML = ajmalProducts.map(p => generateProductCard(p)).join('');
        initAnimations();
    }

    if (document.getElementById('surrati-grid')) {
        const surratiGrid = document.getElementById('surrati-grid');
        const surratiProducts = products.filter(p => p.category === 'Attar' && p.brand === 'Surrati');
        surratiGrid.innerHTML = surratiProducts.map(p => generateProductCard(p)).join('');
        initAnimations();
    }

    if (document.getElementById('afnan-grid')) {
        const afnanGrid = document.getElementById('afnan-grid');
        const afnanProducts = products.filter(p => p.category === 'Afnan');
        afnanGrid.innerHTML = afnanProducts.map(p => generateProductCard(p)).join('');
        initAnimations();
    }

    if (perfumeGrid) {
        const perfumes = products.filter(p => !p.category || (p.category.toLowerCase().includes('fragrance') && !p.category.toLowerCase().includes('body spray')));
        perfumeGrid.innerHTML = perfumes.map(product => generateProductCard(product)).join('');
        initAnimations();
    }

    if (attarGrid) {
        const attars = products.filter(p => p.category === 'Attar' || p.category === 'Afnan');
        attarGrid.innerHTML = attars.map(product => generateProductCard(product)).join('');
        initAnimations();
    }

    // Body Spray section inside Collections page
    if (bodySprayFullGrid) {
        const allBodySprays = products.filter(p => p.category === 'Body Spray');
        bodySprayFullGrid.innerHTML = allBodySprays.map(p => generateProductCard(p)).join('');
        initAnimations();
    }

    if (bodySprayGrid) {
        const bSprays = products.filter(p => p.category === 'Body Spray');
        bodySprayGrid.innerHTML = bSprays.map(p => generateProductCard(p)).join('');
        initAnimations();
    }
}

function generateProductCard(product) {
    // Determine professional placeholder based on category
    let placeholderImg = 'assets/placeholders/perfume.png';
    const cat = (product.category || '').toLowerCase();
    
    if (cat.includes('attar') || cat.includes('afnan')) {
        placeholderImg = 'assets/placeholders/attar.png';
    } else if (cat.includes('body')) {
        placeholderImg = 'assets/placeholders/bodyspray.png';
    } else {
        placeholderImg = 'assets/placeholders/perfume.png';
    }

    // Random discount for visual appeal
    // Safe name for inline onclick (escape single quotes)
    const safeName = product.name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    const volume = (cat.includes('attar') || cat.includes('afnan')) ? '12ml' : 
                   cat.includes('body spray') ? '200ml' : '50ml';
    
    return `
        <div class="product-item">
            <div class="img-wrapper" onclick="openProductViewModal('${safeName}')">
                <img src="${product.image || 'assets/placeholder-perfume.jpg'}" alt="${product.name}" loading="lazy">
                <button onclick="event.stopPropagation(); addToCart('${safeName}')" class="floating-cart-btn" title="Add to Cart">
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>
            <div class="product-content">
                <div class="meta-row">
                    <span class="product-category">${product.category || 'Premium Collection'}</span>
                    <span class="product-volume">${volume}</span>
                </div>
                <h3 class="product-title">${product.name}</h3>
                <div class="price-row">
                    <div class="product-price">Rs. ${product.price}</div>
                    <div class="old-price">Rs. ${oldPrice}</div>
                </div>
                <div class="product-actions">
                    <button onclick="openOrderModal('${safeName}')" class="btn-buy-now">
                        <i class="fa-solid fa-bag-shopping"></i> Order Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

function openOrderModal(productName) {
    const modal = document.getElementById('order-modal');
    const prodInput = document.getElementById('prod-name');
    if (modal && prodInput) {
        prodInput.value = productName;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

// --- ANIMATIONS & INTERACTION ---
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
}

function handleScroll() {
    const header = document.querySelector('.sticky-header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// --- INITIALIZATION ---
function init() {
    console.log("Musa Bhai Fragrances: Engine Started.");
    initTheme();
    renderProducts();
    injectCartUI();
    initEliteHeader();
    initAnimations();
    initAdminWidget(); // Live counter for admin
    
    window.addEventListener('scroll', handleScroll);
    
    // Mobile Menu Toggle â€” handled in initEliteHeader(), not here
    // (removing duplicate listener that fired before the button existed)

    // Modal Closing Logic (kept for general uses or hero btn fallback)
    const orderModal = document.getElementById('order-modal');
    const closeModal = document.querySelector('.close-modal');
    const heroShopBtn = document.getElementById('hero-shop-now');

    if (orderModal) {
        if (closeModal) {
            closeModal.onclick = () => {
                orderModal.style.display = "none";
                document.body.style.overflow = "auto";
            };
        }

        if (heroShopBtn) {
            heroShopBtn.onclick = () => {
                // For Hero Button, redirect to shop page
                window.location.href = "shop.html";
            };
        }

        window.onclick = (event) => {
            if (event.target == orderModal) {
                orderModal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        };

        // --- PROFESSIONAL AUTO ORDER SYSTEM ---
        const orderForm = document.getElementById('orderForm');
        if (orderForm) {
            orderForm.onsubmit = (event) => {
                // 1. Stop reload
                event.preventDefault();
                
                // 2. Collect all input values (MANDATORY)
                const name = document.getElementById('cust-name').value;
                const phone = document.getElementById('cust-phone').value;
                const emailInput = document.getElementById('cust-email');
                const email = emailInput ? emailInput.value : 'N/A';
                const product = document.getElementById('prod-name').value;
                const quantity = document.getElementById('order-qty').value;
                const addressText = document.getElementById('del-address').value;
                const cityInput = document.getElementById('cust-city');
                const city = cityInput ? cityInput.value : '';
                const notesInput = document.getElementById('order-notes');
                const notes = notesInput ? notesInput.value : '';
                const address = `${addressText}${city ? ', ' + city : ''}`;

                // --- GET PRODUCT PRICE ---
                const productData = products.find(p => p.name === product);
                const price = productData ? productData.price : 'N/A';

                // --- SAVE ORDER SYSTEM (MANDATORY) ---
                const newOrder = {
                    id: Date.now(), // Unique Timestamp
                    date: new Date().toLocaleString(),
                    name: name,
                    phone: phone,
                    email: email,
                    product: product,
                    price: price,
                    quantity: quantity,
                    total: (parseInt(price) * parseInt(quantity)) || 0,
                    address: address,
                    notes: notes
                };

                // Keep local record for Admin Panel
                let currentOrders = JSON.parse(localStorage.getItem('orders')) || [];
                currentOrders.push(newOrder);
                localStorage.setItem('orders', JSON.stringify(currentOrders));

                // 2. Generate Universal Order Message
                const orderMessage = `New Order:\nName: ${name}\nPhone: ${phone}\nProduct: ${product}\nQuantity: ${quantity}\nAddress: ${address}\nNotes: ${notes}`;
                const encodedMessage = encodeURIComponent(orderMessage);

                // --- EMAIL ACTION (AUTOMATED via EmailJS) ---
                const serviceID = "YOUR_SERVICE_ID";
                const templateID = "YOUR_TEMPLATE_ID";
                const publicKey = "YOUR_PUBLIC_KEY";

                // Prepare EmailJS Data
                const templateParams = {
                    from_name: name,
                    phone: phone,
                    product: product,
                    quantity: quantity,
                    address: address,
                    notes: notes,
                    message: orderMessage
                };

                // Initialize if not already (or just send)
                if (typeof emailjs !== 'undefined') {
                    emailjs.send(serviceID, templateID, templateParams, publicKey)
                        .then(() => {
                            console.log('Email Sent Successfully to moosakhanbaloch672@gmail.com');
                        }, (err) => {
                            console.log('EmailJS Error:', err);
                        });
                }

                // --- WHATSAPP ACTION (STILL WORKING) ---
                const waNumber = "923101131981"; 
                const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;
                
                // Track for Admin Counter
                let waCount = parseInt(localStorage.getItem('wa_trigger_count')) || 0;
                localStorage.setItem('wa_trigger_count', waCount + 1);

                // Open WhatsApp in new tab
                window.open(waUrl, "_blank");

                // Clear and Close
                orderModal.style.display = "none";
                document.body.style.overflow = "auto";
                orderForm.reset();
            };
        }
    }

    initLoadingScreen();
    initLiveOrderPopup();
    initCarouselNav();
    initSearch(); // Initialize Elite Search
}

// --- PREMIUM LOADING SCREEN ---
function initEliteHeader() {
    const navActions = document.querySelector('.nav-actions');
    if (navActions && !navActions.querySelector('.theme-toggle-btn')) {
        // Clear old placeholders if any
        navActions.innerHTML = `
            <!-- Search Button -->
            <button class="header-action-btn" id="search-open-btn" aria-label="Search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        `;
        
        // Theme Toggle
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'header-action-btn theme-toggle-btn';
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        toggleBtn.setAttribute('title', 'Toggle Light/Dark');
        toggleBtn.onclick = toggleTheme;

        // Cart Button
        const cartBtn = document.createElement('button');
        cartBtn.className = 'header-action-btn';
        cartBtn.id = 'header-cart-btn';
        cartBtn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i><span id="cart-count-badge" style="display:none">0</span>';
        cartBtn.onclick = (e) => {
            e.preventDefault();
            toggleCartPanel();
        };
        
        // Mobile Toggle
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.id = 'mobile-toggle';
        mobileMenuBtn.className = 'header-action-btn mobile-only-toggle';
        mobileMenuBtn.setAttribute('aria-label', 'Menu');
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
        
        navActions.appendChild(toggleBtn);
        navActions.appendChild(cartBtn);
        navActions.appendChild(mobileMenuBtn);
        
        let overlay = document.getElementById('mobile-nav-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'mobile-nav-overlay';
            overlay.className = 'mobile-nav-overlay';
            document.body.appendChild(overlay);
        }

        const navLinks = document.querySelector('.nav-links');

        function openMenu() {
            if (!navLinks) return;
            navLinks.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-bars-staggered');
                icon.classList.add('fa-xmark');
            }
        }

        function closeMenu() {
            if (!navLinks) return;
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars-staggered');
            }
        }

        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.contains('active') ? closeMenu() : openMenu();
        });

        overlay.addEventListener('click', closeMenu);
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeMenu(); closeSearch(); } });
        
        // Re-init search since we cleared innerHTML
        initSearch();
    }
}

// --- ELITE SEARCH LOGIC ---
function initSearch() {
    const searchOpenBtn = document.getElementById('search-open-btn');
    const searchCloseBtn = document.getElementById('search-close-btn');
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('main-search-input');
    const preview = document.getElementById('search-results-preview');

    if (!searchOpenBtn || !overlay) return;

    searchOpenBtn.onclick = () => {
        overlay.classList.add('active');
        if (input) input.focus();
        document.body.style.overflow = 'hidden';
    };

    const headerInput = document.getElementById('header-search-input');
    if (headerInput && input) {
        headerInput.onfocus = () => {
            overlay.classList.add('active');
            input.focus();
            document.body.style.overflow = 'hidden';
        };
        headerInput.oninput = (e) => {
            const query = e.target.value;
            overlay.classList.add('active');
            input.value = query;
            input.focus();
            input.dispatchEvent(new Event('input')); // Trigger main search logic
            document.body.style.overflow = 'hidden';
        };
    }

    if (searchCloseBtn) searchCloseBtn.onclick = closeSearch;

    if (input) {
        input.oninput = (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query.length < 2) {
                if (preview) preview.innerHTML = '';
                return;
            }

            const filtered = products.filter(p => 
                p.name.toLowerCase().includes(query) || 
                (p.category && p.category.toLowerCase().includes(query))
            ).slice(0, 8);

            if (filtered.length === 0) {
                if (preview) preview.innerHTML = '<p style="color:var(--gold); opacity:0.6;">No fragrances matched your search...</p>';
                return;
            }

            if (preview) {
                preview.innerHTML = filtered.map(p => `
                    <div class="search-result-item" onclick="handleSearchResultClick('${p.name.replace(/'/g, "\\'")}')">
                        <img src="${p.image || 'assets/placeholders/perfume.png'}" alt="${p.name}">
                        <div class="search-result-info">
                            <h4>${p.name}</h4>
                            <p>${p.category || 'Premium Selection'} - Rs. ${p.price}</p>
                        </div>
                    </div>
                `).join('');
            }
        };
    }
}

function closeSearch() {
    const overlay = document.getElementById('search-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function handleSearchResultClick(name) {
    closeSearch();
    // Use existing product modal or redirect to shop
    if (window.location.pathname.includes('shop.html')) {
        // Open modal if in shop
        if (typeof openProductViewModal === 'function') openProductViewModal(name);
    } else {
        // Redirect to shop with query or just open general view if available
        window.location.href = `shop.html?search=${encodeURIComponent(name)}`;
    }
}

function initLoadingScreen() {
    const loader = document.getElementById('loading-screen');
    if (loader) {
        // Luxury Boutique Fade: Quick and smooth access
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }, 800);
    }
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    initEliteHeader();
    initLoadingScreen();
    // Re-trigger AOS if used or other animations
    if (typeof initAnimations === 'function') initAnimations();
});

// --- LIVE ORDER POPUP LOGIC ---
function initLiveOrderPopup() {
    const popup = document.getElementById('live-order-popup');
    const nameEl = document.getElementById('order-user-name');
    const productEl = document.getElementById('order-product-name');
    
    if (!popup) return;

    const names = ["Ali from Karachi", "Sarah from Lahore", "Osman from Islamabad", "Bilal from Quetta", "Hassan from Peshawar", "Zainab from Multan", "Faisal from Faisalabad"];
    const productsList = products.map(p => p.name);

    function showPopup() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomProduct = productsList[Math.floor(Math.random() * productsList.length)];
        
        nameEl.innerText = randomName;
        productEl.innerText = `just ordered ${randomProduct}`;
        
        popup.classList.add('active');
        
        setTimeout(() => {
            popup.classList.remove('active');
        }, 5000); // Show for 5 seconds
    }

    // Initial delay
    setTimeout(() => {
        showPopup();
        setInterval(showPopup, 12000); // Every 12 seconds
    }, 5000);
}

// --- ORDER NOTIFICATION UTILITY ---
function showOrderNotification(message) {
    const notify = document.createElement('div');
    notify.className = 'order-notify';
    notify.innerHTML = `
        <div class="notify-content">
            <i class="fa-solid fa-circle-check"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notify);
    
    setTimeout(() => {
        notify.classList.add('active');
    }, 100);

    setTimeout(() => {
        notify.classList.remove('active');
        setTimeout(() => notify.remove(), 500);
    }, 4000);
}

// --- CAROUSEL NAVIGATION ---
function initCarouselNav() {
    setupSlider('body-spray-prev', 'body-spray-next', 'body-spray-viewport');
    setupSlider('fresh-attars-prev', 'fresh-attars-next', 'fresh-attars-viewport');
    setupSlider('new-arrivals-prev', 'new-arrivals-next', 'new-arrivals-viewport');
    setupSlider('new-attar-prev', 'new-attar-next', 'new-attar-viewport');
    setupSlider('shop-prev-1', 'shop-next-1', 'shop-viewport-1');
    setupSlider('shop-prev-2', 'shop-next-2', 'shop-viewport-2');
    setupSlider('ajmal-prev', 'ajmal-next', 'ajmal-viewport');
    setupSlider('surrati-prev', 'surrati-next', 'surrati-viewport');
    setupSlider('afnan-prev', 'afnan-next', 'afnan-viewport');

    function setupSlider(prevId, nextId, viewportId) {
        const prev = document.getElementById(prevId);
        const next = document.getElementById(nextId);
        const viewport = document.getElementById(viewportId);

        if (prev && next && viewport) {
            prev.onclick = () => viewport.scrollBy({ left: -viewport.offsetWidth * 0.8, behavior: 'smooth' });
            next.onclick = () => viewport.scrollBy({ left: viewport.offsetWidth * 0.8, behavior: 'smooth' });
            
            // INDEPENDENT AUTO-SLIDE
            let scrollInterval = setInterval(() => {
                if (viewport.scrollLeft + viewport.offsetWidth >= viewport.scrollWidth - 10) {
                    viewport.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    viewport.scrollBy({ left: viewport.offsetWidth * 0.8, behavior: 'smooth' });
                }
            }, 8000 + (Math.random() * 2000));

            viewport.onmouseenter = () => clearInterval(scrollInterval);
        }
    }
}

// ============================================================
// CART SYSTEM
// ============================================================

function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    if (!product) return;
    const existing = cart.find(c => c.name === productName);
    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            image: product.image || '',
            qty: 1
        });
    }
    saveCart();
    renderCartBadge();
    showCartAddedNotification(product.name);
}

function removeFromCart(productName) {
    cart = cart.filter(c => c.name !== productName);
    saveCart();
    renderCartBadge();
    renderCartPanel();
}

function clearCart() {
    cart = [];
    saveCart();
    renderCartBadge();
    renderCartPanel();
}

function renderCartBadge() {
    const badge = document.getElementById('cart-count-badge');
    if (!badge) return;
    const total = cart.reduce((sum, c) => sum + (c.qty || 1), 0);
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
}

function renderCartPanel() {
    const listEl = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total-price');
    if (!listEl) return;

    if (cart.length === 0) {
        listEl.innerHTML = `
            <div class="cart-empty">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your cart is empty</p>
            </div>`;
        if (totalEl) totalEl.textContent = 'Rs. 0';
        return;
    }

    listEl.innerHTML = cart.map(item => {
        const safeN = item.name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        const subtotal = parseInt(item.price) * (item.qty || 1);
        return `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}"
                 onerror="this.src='assets/placeholders/perfume.png'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rs. ${subtotal}</div>
                ${(item.qty > 1) ? `<div class="cart-item-qty">Qty: ${item.qty}</div>` : ''}
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${safeN}')">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>`;
    }).join('');

    const total = cart.reduce((s, c) => s + parseInt(c.price) * (c.qty || 1), 0);
    if (totalEl) totalEl.textContent = `Rs. ${total}`;
}

function toggleCartPanel() {
    const panel   = document.getElementById('cart-panel');
    const overlay = document.getElementById('cart-overlay');
    if (!panel) return;
    const isOpen = panel.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open', isOpen);
    if (isOpen) renderCartPanel();
}

function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add products before ordering.');
        return;
    }
    let message = 'ðŸ›’ *Order Details:*\n\n';
    let total = 0;
    cart.forEach((item, i) => {
        const sub = parseInt(item.price) * (item.qty || 1);
        total += sub;
        message += `${i + 1}. *${item.name}*`;
        if (item.qty > 1) message += ` (x${item.qty})`;
        message += ` â€” Rs. ${sub}\n`;
    });
    message += `\nðŸ’° *Total: Rs. ${total}*\n\nPlease confirm my order. Thank you! ðŸ™`;
    window.open(`https://wa.me/923101131981?text=${encodeURIComponent(message)}`, '_blank');
}

function showCartAddedNotification(name) {
    const n = document.createElement('div');
    n.className = 'cart-added-notif';
    n.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${name} added to cart!</span>`;
    document.body.appendChild(n);
    setTimeout(() => n.classList.add('show'), 30);
    setTimeout(() => {
        n.classList.remove('show');
        setTimeout(() => n.remove(), 450);
    }, 2600);
}

// ============================================================
// PRODUCT VIEW MODAL
// ============================================================
function openProductViewModal(productName) {
    const product = products.find(p => p.name === productName);
    if (!product) return;

    const modal = document.getElementById('product-view-modal');
    if (!modal) return;

    const oldPrice = Math.round(parseInt(product.price) * 1.25);
    let placeholder = 'assets/placeholders/perfume.png';
    const cat = (product.category || '').toLowerCase();
    if (cat.includes('attar') || cat.includes('afnan')) placeholder = 'assets/placeholders/attar.png';
    else if (cat.includes('body')) placeholder = 'assets/placeholders/bodyspray.png';

    const img = document.getElementById('pvm-img');
    img.src = product.image || placeholder;
    img.onerror = () => { img.src = placeholder; };
    img.alt = product.name;

    document.getElementById('pvm-category').textContent  = product.category || 'Premium Collection';
    document.getElementById('pvm-name').textContent       = product.name;
    document.getElementById('pvm-price').textContent      = `Rs. ${product.price}`;
    document.getElementById('pvm-old-price').textContent  = `Rs. ${oldPrice}`;

    document.getElementById('pvm-add-cart-btn').onclick = () => {
        addToCart(productName);
        closeProductViewModal();
    };
    document.getElementById('pvm-buy-now-btn').onclick = () => {
        closeProductViewModal();
        openOrderModal(productName);
    };

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProductViewModal() {
    const modal = document.getElementById('product-view-modal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// ============================================================
// INJECT ALL NEW UI (Cart + Product Modal) INTO PAGE
// ============================================================
function injectCartUI() {
    // ---- Product View Modal ----
    if (!document.getElementById('product-view-modal')) {
        const pvModal = document.createElement('div');
        pvModal.id = 'product-view-modal';
        pvModal.className = 'pv-modal-overlay';
        pvModal.innerHTML = `
            <div class="pv-modal-box">
                <button class="pv-close-btn" onclick="closeProductViewModal()">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="pv-modal-inner">
                    <div class="pv-img-side">
                        <img id="pvm-img" src="" alt="">
                    </div>
                    <div class="pv-info-side">
                        <span id="pvm-category" class="pvm-cat-label"></span>
                        <h2 id="pvm-name" class="pvm-name"></h2>
                        <div class="pvm-price-row">
                            <span id="pvm-price" class="pvm-price"></span>
                            <span id="pvm-old-price" class="pvm-old-price"></span>
                        </div>
                        <div class="pvm-rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span>5.0 Rating</span>
                        </div>
                        <div class="pvm-divider"></div>
                        <div class="pvm-actions">
                            <button id="pvm-add-cart-btn" class="pvm-btn pvm-btn-cart">
                                <i class="fa-solid fa-cart-plus"></i> Add to Cart
                            </button>
                            <button id="pvm-buy-now-btn" class="pvm-btn pvm-btn-buy">
                                <i class="fa-brands fa-whatsapp"></i> Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        pvModal.addEventListener('click', e => {
            if (e.target === pvModal) closeProductViewModal();
        });
        document.body.appendChild(pvModal);
    }

    // ---- Cart Overlay ----
    if (!document.getElementById('cart-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'cart-overlay';
        overlay.onclick = toggleCartPanel;
        document.body.appendChild(overlay);
    }

    // ---- Cart Panel ----
    if (!document.getElementById('cart-panel')) {
        const panel = document.createElement('div');
        panel.id = 'cart-panel';
        panel.innerHTML = `
            <div class="cart-panel-header">
                <h3><i class="fa-solid fa-bag-shopping"></i> My Cart</h3>
                <button class="cart-close-btn" onclick="toggleCartPanel()">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div id="cart-items-list" class="cart-items-list"></div>
            <div class="cart-panel-footer">
                <div class="cart-total-row">
                    <span>Total</span>
                    <span id="cart-total-price">Rs. 0</span>
                </div>
                <button class="cart-whatsapp-btn" onclick="sendWhatsAppOrder()">
                    <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp
                </button>
                <button class="cart-clear-btn" onclick="clearCart()">
                    <i class="fa-solid fa-trash"></i> Clear Cart
                </button>
            </div>
        `;
        document.body.appendChild(panel);
    }

    renderCartBadge();
}

// ============================================================
// THEME MANAGEMENT
// ============================================================
function initTheme() {
    const savedTheme = localStorage.getItem('musa_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
}

function injectThemeToggle() {
    if (document.getElementById('theme-toggle-container')) return;
    
    const headerNav = document.querySelector('.nav-flex');
    if (!headerNav) return;

    const themeContainer = document.createElement('div');
    themeContainer.id = 'theme-toggle-container';
    themeContainer.className = 'theme-toggle-wrapper';
    themeContainer.innerHTML = `
        <button onclick="toggleTheme()" class="theme-toggle-btn" title="Toggle Light/Dark Mode">
            <i class="fa-solid ${document.body.classList.contains('light-theme') ? 'fa-moon' : 'fa-sun'}"></i>
        </button>
    `;
    
    // Find a good place to insert - after logo or before mobile toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileToggle) {
        headerNav.insertBefore(themeContainer, mobileToggle);
    } else {
        headerNav.appendChild(themeContainer);
    }
}

function toggleTheme() {
    const body = document.body;
    const isLight = body.classList.toggle('light-theme');
    localStorage.setItem('musa_theme', isLight ? 'light' : 'dark');
    
    // Update Icons
    const icon = document.querySelector('.theme-toggle-btn i');
    if (icon) {
        if (isLight) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
}

// Ensure init runs after DOM is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}
