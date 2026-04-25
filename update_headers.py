import re

def update_headers():
    # 1. Read index.html to extract the new header block
    with open('index.html', 'r', encoding='utf-8') as f:
        index_content = f.read()

    header_match = re.search(r'<header id="main-header"[^>]*>.*?</header>', index_content, re.DOTALL)
    if not header_match:
        print("Could not find header in index.html")
        return
    
    header_html = header_match.group(0)

    # 2. Files to process and their active link name
    targets = {
        'shop.html': 'Shop',
        'info.html': 'Contact',
        'about.html': 'About Us'
    }

    for file_name, active_link in targets.items():
        with open(file_name, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the header block
        new_content = re.sub(r'<header id="main-header".*?</header>', header_html, content, flags=re.DOTALL)
        
        # Now fix the nav-active class
        # Remove nav-active from Home
        new_content = new_content.replace('class="nav-active" style="text-decoration:none;', 'style="text-decoration:none;')
        
        # Add nav-active to the target link
        # The links look like: <a href="shop.html" style="text-decoration:none;...">Shop</a>
        # We want: <a href="shop.html" class="nav-active" style="text-decoration:none;...">Shop</a>
        link_pattern = re.compile(rf'(<a href="[^"]+" )(style="text-decoration:none;[^>]+>{active_link}</a>)')
        new_content = link_pattern.sub(r'\1class="nav-active" \2', new_content)

        with open(file_name, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Updated {file_name}")

if __name__ == "__main__":
    update_headers()
