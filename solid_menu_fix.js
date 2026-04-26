const fs = require('fs');

// Ultimate Visibility Fix v3: Solid Black, No Blurs, Max Contrast
let indexHtml = fs.readFileSync('index.html', 'utf8');

const oldMobileStyles = /header#main-header #main-nav-links {[\s\S]*?header#main-header #main-nav-links a:hover {[\s\S]*?}/;

const newMobileStyles = `header#main-header #main-nav-links {
                    position: fixed !important;
                    top: 0 !important;
                    right: -100% !important;
                    width: min(85%, 340px) !important;
                    height: 100vh !important;
                    background: #000000 !important; /* Solid black */
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: center !important;
                    align-items: center !important;
                    gap: 32px !important;
                    margin: 0 !important;
                    z-index: 1000000 !important; /* Extremely high */
                    transition: right 0.4s ease !important;
                    box-shadow: -10px 0 30px rgba(0,0,0,0.9) !important;
                    border-left: 1px solid #D4AF37 !important;
                    padding: 80px 30px 40px !important;
                }
                
                header#main-header #main-nav-links.active {
                    right: 0 !important;
                }

                header#main-header #main-nav-links .menu-close-btn {
                    position: absolute !important;
                    top: 25px !important;
                    right: 25px !important;
                    font-size: 40px !important;
                    color: #D4AF37 !important;
                    cursor: pointer !important;
                    z-index: 1000001 !important;
                    display: block !important;
                }

                header#main-header #main-nav-links a {
                    font-size: 1.4rem !important;
                    letter-spacing: 4px !important;
                    width: 100% !important;
                    text-align: center !important;
                    padding: 18px 20px !important;
                    border-bottom: 1px solid rgba(212,175,55,0.2) !important;
                    color: #ffffff !important;
                    font-weight: 800 !important;
                    text-transform: uppercase !important;
                    text-decoration: none !important;
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
