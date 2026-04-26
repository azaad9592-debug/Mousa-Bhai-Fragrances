const fs = require('fs');

let styleCss = fs.readFileSync('style.css', 'utf8');

// The outer media query starts at 1564: @media (max-width: 992px) {
// It ends at 1659: }

// Replace the incorrect closing of the inner media query and re-organize correctly
styleCss = styleCss.replace(/div\.menu-close-btn { display: block !important; }\s*\}\s*\.menu-close-btn { display: none !important; }/g, 
`div.menu-close-btn { display: block !important; }
    }

    /* Fixed closure: move menu-close-btn out of the media query properly if needed */
    .menu-close-btn { display: none !important; }`);

fs.writeFileSync('style.css', styleCss, 'utf8');
console.log('Fixed CSS');
