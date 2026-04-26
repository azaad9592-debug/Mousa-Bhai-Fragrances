const fs = require('fs');

const files = ['index.html', 'shop.html', 'info.html', 'about.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // Pattern to find the nav section
    // <a href="shop.html" ...>Shop</a>
    // We want to add <a href="best-sellers.html" ...>Best Sellers</a> after it
    
    if (content.includes('href="best-sellers.html"')) {
        console.log(`Best Sellers already in ${file} header (or elsewhere)`);
    } else {
        const shopLinkPattern = /<a href="shop\.html" style="text-decoration:none; color:rgba\(255,255,255,0\.75\); font-family:'Montserrat',sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1\.8px; white-space:nowrap;">Shop<\/a>/;
        
        const bestSellersLink = '<a href="best-sellers.html" style="text-decoration:none; color:rgba(255,255,255,0.75); font-family:\'Montserrat\',sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.8px; white-space:nowrap;">Best Sellers</a>';
        
        content = content.replace(shopLinkPattern, `$& \n                ${bestSellersLink}`);
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Added Best Sellers to ${file} header nav`);
    }
}
