const fs = require('fs');

// Update header and mobile menu visibility + z-index
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Increase main header z-index to 90000 to be above search overlay (20000)
indexHtml = indexHtml.replace(/id="main-header" style="([\s\S]*?)z-index:9000;/, 'id="main-header" style="$1z-index:90000;');

const oldMobileStyles = /header#main-header #main-nav-links {[\s\S]*?header#main-header #main-nav-links a {[\s\S]*?text-shadow: 0 2px 10px rgba\(0,0,0,0\.5\) !important;\s*}/;

const newMobileStyles = `header#main-header #main-nav-links {
                    position: fixed !important;
                    top: 0 !important;
                    right: -100% !important;
                    width: min(85%, 340px) !important;
                    height: 100vh !important;
                    background: rgba(10, 10, 10, 0.98) !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: center !important;
                    align-items: center !important;
                    gap: 32px !important;
                    margin: 0 !important;
                    z-index: 100000 !important;
                    transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    box-shadow: -15px 0 50px rgba(0,0,0,0.8) !important;
                    border-left: 1px solid rgba(212,175,55,0.2) !important;
                    padding: 80px 30px 40px !important;
                    backdrop-filter: blur(20px) !important;
                    -webkit-backdrop-filter: blur(20px) !important;
                }
                
                header#main-header #main-nav-links.active {
                    right: 0 !important;
                }

                header#main-header #main-nav-links .menu-close-btn {
                    position: absolute !important;
                    top: 25px !important;
                    right: 25px !important;
                    font-size: 38px !important;
                    color: #D4AF37 !important;
                    cursor: pointer !important;
                    z-index: 100001 !important;
                }

                header#main-header #main-nav-links a {
                    font-size: 1.3rem !important;
                    letter-spacing: 4px !important;
                    width: 100% !important;
                    text-align: center !important;
                    padding: 15px 20px !important;
                    border-bottom: 1px solid rgba(212,175,55,0.15) !important;
                    color: #ffffff !important;
                    font-weight: 800 !important;
                    text-transform: uppercase !important;
                    transition: 0.3s !important;
                    text-shadow: 0 2px 15px rgba(0,0,0,0.8) !important;
                    display: block !important;
                }
                
                header#main-header #main-nav-links a:hover {
                    color: #D4AF37 !important;
                    background: rgba(212,175,55,0.1) !important;
                }`;

indexHtml = indexHtml.replace(oldMobileStyles, newMobileStyles);
fs.writeFileSync('index.html', indexHtml, 'utf8');

// Synchronize to other pages
const headerMatch = indexHtml.match(/<header id="main-header"[\s\S]*?<\/header>/);
if (headerMatch) {
    const headerHtml = headerMatch[0];
    const files = ['shop.html', 'info.html', 'about.html'];
    for (const file of files) {
        if (!fs.existsSync(file)) continue;
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/<header id="main-header"[\s\S]*?<\/header>/, headerHtml);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Synchronized header in ${file}`);
    }
}
