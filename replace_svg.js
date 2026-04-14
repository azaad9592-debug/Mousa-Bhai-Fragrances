const fs = require('fs');
const path = require('path');

const svgHeader = `                            <!-- Ethereal Shine Layer -->
                            <circle cx="50" cy="50" r="48" fill="none" stroke="url(#gold-gradient-new)" stroke-width="1" opacity="0.3"/>
                            <!-- Star Sparkle -->
                            <path d="M50 2 L52 10 L60 12 L52 14 L50 22 L48 14 L40 12 L48 10 Z" fill="url(#gold-gradient-new)" opacity="0.8"/>
                            
                            <!-- Royal Cap - Intricate Cut -->
                            <path d="M45 18 L55 18 L58 28 L53 30 L50 32 L47 30 L42 28 Z" fill="url(#gold-gradient-new)" stroke="#FFF" stroke-width="0.5"/>
                            <rect x="47" y="32" width="6" height="5" fill="#B8860B"/>

                            <!-- Crystal Cut Bottle Base -->
                            <path d="M35 44 L65 44 L75 75 L60 88 L50 90 L40 88 L25 75 Z" fill="none" stroke="url(#gold-gradient-new)" stroke-width="2" stroke-linejoin="round"/>
                            
                            <!-- Inner Liquid/Facets -->
                            <path d="M37 46 L63 46 L71 74 L60 85 L50 87 L40 85 L29 74 Z" fill="url(#gold-gradient-new)" opacity="0.15"/>
                            <path d="M50 44 L50 90" stroke="url(#gold-gradient-new)" stroke-width="0.5" opacity="0.5"/>
                            <path d="M35 44 L50 65 L65 44" stroke="url(#gold-gradient-new)" stroke-width="0.5" opacity="0.5"/>
                            <path d="M25 75 L50 65 L75 75" stroke="url(#gold-gradient-new)" stroke-width="0.5" opacity="0.5"/>

                            <!-- Premium Gold Emblem M inside bottle -->
                            <path d="M38 75 L45 55 L50 65 L55 55 L62 75" fill="none" stroke="url(#gold-gradient-new)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" filter="drop-shadow(0px 3px 3px rgba(0,0,0,0.9))"/>
                            
                            <defs>
                                <linearGradient id="gold-gradient-new" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#D4AF37" />
                                    <stop offset="30%" stop-color="#FFF3CD" />
                                    <stop offset="50%" stop-color="#F1D57F" />
                                    <stop offset="85%" stop-color="#AA7C11" />
                                    <stop offset="100%" stop-color="#805C06" />
                                </linearGradient>
                            </defs>`;

const svgFooter = svgHeader.replace(/gold-gradient-new/g, 'gold-gradient-footer-new');

const files = ['index.html', 'shop.html', 'info.html'];
const regex = /<svg class="m-symbol luxury-gold-svg" viewBox="0 0 100 100">([\s\S]*?)<\/svg>/g;

files.forEach(f => {
    let p = path.join(__dirname, f);
    if(fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');
        let parts = content.split(regex);
        if(parts.length === 5) {
            // parts[0] is html before header svg
            // parts[1] is header svg contents
            // parts[2] is html between header and footer svg
            // parts[3] is footer svg contents
            // parts[4] is html after footer svg
            let newContent = parts[0] + 
                             '<svg class="m-symbol luxury-gold-svg" viewBox="0 0 100 100">\n' + svgHeader + '\n                        </svg>' +
                             parts[2] +
                             '<svg class="m-symbol luxury-gold-svg" viewBox="0 0 100 100">\n' + svgFooter + '\n                        </svg>' +
                             parts[4];
            fs.writeFileSync(p, newContent);
            console.log('Updated ' + f);
        }
    }
});
