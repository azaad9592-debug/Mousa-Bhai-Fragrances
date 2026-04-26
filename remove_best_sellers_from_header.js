const fs = require('fs');

const files = ['index.html', 'shop.html', 'info.html', 'about.html', 'best-sellers.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // Remove Best Sellers link from header nav specifically
    // Pattern: <a href="best-sellers.html" ...>Best Sellers</a>
    const bestSellersLinkRegex = /<a href="best-sellers\.html" style="text-decoration:none; color:[^;]*; font-family:'Montserrat',sans-serif; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1\.8px; white-space:nowrap;">Best Sellers<\/a>/g;
    
    // Check if it's inside the <nav> tag
    const navRegex = /(<nav id="main-nav-links"[^>]*>)([\s\S]*?)(<\/nav>)/;
    const match = content.match(navRegex);
    
    if (match) {
        const navContent = match[2];
        const newNavContent = navContent.replace(bestSellersLinkRegex, '');
        content = content.replace(match[0], match[1] + newNavContent + match[3]);
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Removed Best Sellers from ${file} header nav`);
    }
}
