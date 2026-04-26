const fs = require('fs');
const path = require('path');

const indexContent = fs.readFileSync('index.html', 'utf8');
const footerMatch = indexContent.match(/<footer[\s\S]*?<\/footer>/);

if (!footerMatch) {
    console.error('Could not find footer in index.html');
    process.exit(1);
}

const footerHtml = footerMatch[0];
const files = ['shop.html', 'info.html', 'about.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the footer
    // Use a regex that matches footer tags with or without classes
    content = content.replace(/<footer[\s\S]*?<\/footer>/, footerHtml);
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Synchronized footer in ${file}`);
}
