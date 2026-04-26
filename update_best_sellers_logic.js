const fs = require('fs');

let scriptJs = fs.readFileSync('script.js', 'utf8');

// List of products to mark as Best Sellers
const bestSellerNames = [
    "Wurood", "Black Scent", "ROMANCE", "Tiger Black", "AL-WATANI", 
    "Noble Man", "DIVINE", "HISTORY", "MAXI", "MARQUIS", 
    "JANAN SPORT By J.", "WHITE MUSK BY J.", "KAAF", "LAMSAT HARIR", 
    "MOUSOF", "Musk Silk Ajmal", "Oudh O Oudh", "Amber Oud", 
    "Aventus Creed", "Oud for Greatness"
];

// 1. Inject isBestSeller property into DEFAULT_PRODUCTS
bestSellerNames.forEach(name => {
    const regex = new RegExp(`name: "${name}", price: "(.*?)"`, 'g');
    scriptJs = scriptJs.replace(regex, `name: "${name}", price: "$1", isBestSeller: true`);
});

// 2. Add Best Sellers rendering logic to script.js
const renderBestSellersLogic = `
    const bestSellersGrid = document.getElementById('best-sellers-grid');
    if (bestSellersGrid) {
        const bestSellers = products.filter(p => p.isBestSeller);
        bestSellersGrid.innerHTML = bestSellers.map(p => generateProductCard(p)).join('');
        initAnimations();
    }
`;

// Inject into renderProducts function
scriptJs = scriptJs.replace('function renderProducts() {', 'function renderProducts() {' + renderBestSellersLogic);

fs.writeFileSync('script.js', scriptJs, 'utf8');
console.log('Updated script.js with Best Sellers logic and data');
