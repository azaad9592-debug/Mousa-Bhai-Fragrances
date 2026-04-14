import os
import re

svg_content = """<svg class="m-symbol luxury-gold-svg" viewBox="0 0 100 100">
                            <!-- Ethereal Shine Layer -->
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
                            </defs>
                        </svg>"""

footer_svg_content = svg_content.replace('gold-gradient-new', 'gold-gradient-footer-new')

pattern_header = re.compile(r'<svg class="m-symbol luxury-gold-svg" viewBox="0 0 100 100">.*?</svg>', re.DOTALL)
files_to_edit = ['index.html', 'shop.html', 'info.html']

for f in files_to_edit:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            
        # We need to replace the first occurrence representing the header
        # and the second occurrence representing the footer
        
        # Split by <svg class="m-symbol luxury-gold-svg" viewBox="0 0 100 100"> to carefully replace
        parts = pattern_header.split(content)
        
        if len(parts) == 3: # means 2 SVG tags were found
            new_content = parts[0] + svg_content + parts[1] + footer_svg_content + parts[2]
            with open(f, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f"Updated both SVGs in {f}")
        else:
            print(f"File {f} had {len(parts)-1} SVGs, skipping or inspecting")
