const fs = require('fs');

const shopHtml = fs.readFileSync('shop.html', 'utf8');
const idMatches = shopHtml.match(/id="main-nav-links"/g);
console.log(`id="main-nav-links" count in shop.html: ${idMatches ? idMatches.length : 0}`);

const mobileToggleMatches = shopHtml.match(/mobile-toggle/g);
console.log(`mobile-toggle count in shop.html: ${mobileToggleMatches ? mobileToggleMatches.length : 0}`);

const mobileMenuBtnMatches = shopHtml.match(/mobile-menu-btn/g);
console.log(`mobile-menu-btn count in shop.html: ${mobileMenuBtnMatches ? mobileMenuBtnMatches.length : 0}`);

// Let's check style.css media query logic
const styleCss = fs.readFileSync('style.css', 'utf8');
let openBraces = 0;
let inMedia = false;
let lines = styleCss.split('\n');
for (let i=1550; i<1670; i++) {
    if (lines[i] && lines[i].includes('@media (max-width: 992px)')) {
        console.log(`Found opening at line ${i+1}`);
    }
}
