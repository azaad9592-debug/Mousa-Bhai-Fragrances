const fs = require('fs');

const files = ['index.html', 'shop.html', 'info.html', 'about.html', 'best-sellers.html', 'order.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // Replace old New Arrivals links
    content = content.replace(/href="shop\.html\?cat=perfume"/g, 'href="new-arrivals.html"');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated New Arrivals links in ${file}`);
}
