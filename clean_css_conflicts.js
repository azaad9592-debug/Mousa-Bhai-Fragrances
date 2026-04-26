const fs = require('fs');

let styleCss = fs.readFileSync('style.css', 'utf8');

// Remove conflicting mobile nav rules that might be causing blur/dimness
// We look for patterns that target mobile nav and overlay
const rulesToRemove = [
    /\.mobile-nav-overlay\s*\{[\s\S]*?\}/g,
    /\.mobile-nav-overlay\.active\s*\{[\s\S]*?\}/g,
    /header#main-header\s*\.nav-links\s*\{[\s\S]*?\}/g,
    /header#main-header\s*\.nav-links\s*a[\s\S]*?\{[\s\S]*?\}/g,
    /@media\s*\(max-width:\s*991px\)\s*\{[\s\S]*?\.mobile-toggle[\s\S]*?\}/g
];

rulesToRemove.forEach(rule => {
    styleCss = styleCss.replace(rule, '');
});

fs.writeFileSync('style.css', styleCss, 'utf8');
console.log('Cleaned up style.css from conflicting mobile menu rules');
