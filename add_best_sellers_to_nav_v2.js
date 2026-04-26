const fs = require('fs');

const files = ['index.html', 'shop.html', 'info.html', 'about.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // Find the Shop link in the main nav
    const shopLinkRegex = /<a href="shop\.html"[^>]*>Shop<\/a>/;
    
    // Check if Best Sellers is already in the NAV specifically (not just the file)
    const navContentRegex = /<nav id="main-nav-links"[^>]*>([\s\S]*?)<\/nav>/;
    const navMatch = content.match(navContentRegex);
    
    if (navMatch && navMatch[1].includes('best-sellers.html')) {
        console.log(`Best Sellers already in ${file} nav`);
        continue;
    }

    const bestSellersLink = '<a href="best-sellers.html" style="text-decoration:none; color:rgba(255,255,255,0.75); font-family:\'Montserrat\',sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.8px; white-space:nowrap;">Best Sellers</a>';
    
    content = content.replace(shopLinkRegex, `$& \n                ${bestSellersLink}`);
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Added Best Sellers to ${file} header nav`);
}
