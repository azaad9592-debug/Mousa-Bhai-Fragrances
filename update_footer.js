const fs = require('fs');
const path = require('path');

const files = ['index.html', 'shop.html', 'info.html', 'about.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;

    let content = fs.readFileSync(file, 'utf8');

    // 1. Remove About Us from Shop Links
    content = content.replace(/<li><a href="about\.html">About Us<\/a><\/li>\s*/g, '');

    // 2. Add About Us to Support list
    // We look for <h4>Support</h4>\s*<ul class="footer-links">
    const supportPattern = /(<h4>Support<\/h4>\s*<ul class="footer-links">)/;
    
    // Check if it already has About Us right after Support to avoid duplicates
    if (!content.includes('<h4>Support</h4>\n                <ul class="footer-links">\n                    <li><a href="about.html">About Us</a></li>')) {
        content = content.replace(supportPattern, '$1\n                    <li><a href="about.html">About Us</a></li>');
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated footer in ${file}`);
}
