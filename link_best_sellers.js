const fs = require('fs');

const files = ['index.html', 'shop.html', 'info.html', 'about.html', 'order.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // Replace old Best Sellers links (pointing to shop.html?cat=attar or similar)
    // Common pattern: <li><a href="shop.html?cat=attar">Best Sellers</a></li>
    content = content.replace(/href="shop\.html\?cat=attar"/g, 'href="best-sellers.html"');
    content = content.replace(/href="shop\.html\?cat=attars"/g, 'href="best-sellers.html"');
    
    // Also update any text links that say "Best Sellers" and point to shop.html
    content = content.replace(/<a href="shop\.html">Best Sellers<\/a>/g, '<a href="best-sellers.html">Best Sellers</a>');

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated Best Sellers links in ${file}`);
}
