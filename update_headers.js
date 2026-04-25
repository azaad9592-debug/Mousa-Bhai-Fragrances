const fs = require('fs');

function updateHeaders() {
    const indexContent = fs.readFileSync('index.html', 'utf8');
    
    // Extract the exact header match from index.html
    const headerMatch = indexContent.match(/<header id="main-header"[\s\S]*?<\/header>/);
    if (!headerMatch) {
        console.log("Could not find header in index.html");
        return;
    }
    
    const headerHtml = headerMatch[0];
    
    const targets = {
        'shop.html': 'Shop',
        'info.html': 'Contact',
        'about.html': 'About Us'
    };
    
    for (const [file, activeLink] of Object.entries(targets)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Replace the existing header
        content = content.replace(/<header id="main-header"[\s\S]*?<\/header>/, headerHtml);
        
        // Remove nav-active from Home
        content = content.replace('class="nav-active" style="text-decoration:none;', 'style="text-decoration:none;');
        
        // Add nav-active to the target link
        const linkPattern = new RegExp(`(<a href="[^"]+" )(style="text-decoration:none;[^>]+>${activeLink}<\/a>)`);
        content = content.replace(linkPattern, '$1class="nav-active" $2');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}

updateHeaders();
