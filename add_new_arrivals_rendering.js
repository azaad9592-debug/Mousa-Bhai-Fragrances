const fs = require('fs');

let scriptJs = fs.readFileSync('script.js', 'utf8');

// 1. Add New Arrivals rendering logic to script.js
const renderNewArrivalsLogic = `
    const newArrivalsPageGrid = document.getElementById('new-arrivals-page-grid');
    if (newArrivalsPageGrid) {
        const newArrivals = products.filter(p => p.isNew || p.isNewArrival);
        newArrivalsPageGrid.innerHTML = newArrivals.map(p => generateProductCard(p)).join('');
        initAnimations();
    }
`;

// Inject into renderProducts function
scriptJs = scriptJs.replace('function renderProducts() {', 'function renderProducts() {' + renderNewArrivalsLogic);

fs.writeFileSync('script.js', scriptJs, 'utf8');
console.log('Updated script.js with New Arrivals page rendering logic');
