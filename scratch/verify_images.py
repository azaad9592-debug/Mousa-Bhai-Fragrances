import os
import re

image_dir = 'assets/images'
files = os.listdir(image_dir)

products = [
    {'id': 1, 'name': 'Wurood', 'price': '2999', 'category': 'Premium Fragrance', 'image': 'assets/images/wurood-rs-2999.jpeg'},
    {'id': 2, 'name': 'Black Scent', 'price': '1899', 'category': 'Premium Fragrance', 'image': 'assets/images/black-scent-rs-1899.jpeg'},
    {'id': 3, 'name': 'ROMANCE', 'price': '2999', 'category': 'Premium Fragrance', 'image': 'assets/images/romance-2999.jpeg'},
    {'id': 4, 'name': 'Tiger Black', 'price': '1799', 'category': 'Premium Fragrance', 'image': 'assets/images/tiger-black-rs-1799.jpeg'},
    {'id': 5, 'name': 'AL-WATANI', 'price': '1799', 'category': 'Premium Fragrance', 'image': 'assets/images/al-watani-rs-1799.jpeg'},
    {'id': 6, 'name': 'Noble Man', 'price': '1999', 'category': 'Premium Fragrance', 'image': 'assets/images/noble-man-rs-1999.jpeg'},
    {'id': 7, 'name': 'DIVINE', 'price': '1699', 'category': 'Premium Fragrance', 'image': 'assets/images/divine-rs-1699.jpeg'},
    {'id': 8, 'name': 'HISTORY', 'price': '2499', 'category': 'Premium Fragrance', 'image': 'assets/images/history-rs-2499.jpeg'},
    {'id': 9, 'name': 'MAXI', 'price': '4999', 'category': 'Premium Fragrance', 'image': 'assets/images/maxi-rs-4999.jpeg'},
    {'id': 10, 'name': 'NTA By BLAZER', 'price': '1599', 'category': 'Premium Fragrance', 'image': 'assets/images/nta-by-blazer-rs-1599.jpeg'},
    {'id': 11, 'name': 'TEA ROSE MESK', 'price': '1999', 'category': 'Premium Fragrance', 'image': 'assets/images/tea-rose-mesk-rs-1999.jpeg'},
    {'id': 12, 'name': 'MUSK AL-HAWAMEER', 'price': '2499', 'category': 'Premium Fragrance', 'image': 'assets/images/musk-al-hawameer-rs-2499.jpeg'},
    {'id': 13, 'name': 'NAJOOM', 'price': '1699', 'category': 'Premium Fragrance', 'image': 'assets/images/najoom-rs-1699.jpeg'},
    {'id': 14, 'name': 'MARQUIS', 'price': '3799', 'category': 'Premium Fragrance', 'image': 'assets/images/marquis-rs-3799.jpeg'},
    {'id': 15, 'name': 'KHUMAR', 'price': '4499', 'category': 'Premium Fragrance', 'image': 'assets/images/khumaar-rs-4499.jpeg'},
    {'id': 16, 'name': 'JANAN SPORT By J.', 'price': '6299', 'category': 'Premium Fragrance', 'image': 'assets/images/janan-sports-by-j.-rs-6299.jpeg'},
    {'id': 17, 'name': 'JANAN OUD By J.', 'price': '6299', 'category': 'Premium Fragrance', 'image': 'assets/images/janan-oud-by-j.-rs-6299.jpeg'},
    {'id': 18, 'name': 'WHITE MUSK BY J.', 'price': '4999', 'category': 'Premium Fragrance', 'image': 'assets/images/white-musk-rs-4999.jpeg'},
    {'id': 19, 'name': 'MARJ By AHMED AL-MAGHRABI', 'price': '13999', 'category': 'Premium Fragrance', 'image': 'assets/images/marj-by-ahmed-al-maghrabi-rs-13999.jpeg'},
    {'id': 20, 'name': 'KAAF', 'price': '699', 'category': 'Premium Fragrance', 'image': 'assets/images/kaaf-rs-699.jpeg'},
    {'id': 21, 'name': 'Blue Lady', 'price': '2999', 'category': 'Premium Fragrance', 'image': 'assets/images/blue-lady-rs-2999.jpeg'},
    {'id': 22, 'name': 'AL-FARAS', 'price': '3499', 'category': 'Premium Fragrance', 'image': 'assets/images/al-faras-rs3499.jpeg'},
    {'id': 23, 'name': 'LAMSAT HARIR', 'price': '2999', 'category': 'Premium Fragrance', 'image': 'assets/images/lamsat-harir-rs--2999.jpeg'},
    {'id': 24, 'name': 'MOUSOF', 'price': '3999', 'category': 'Premium Fragrance', 'image': 'assets/images/mousof-rs-3999.jpeg'},
    {'id': 25, 'name': 'OUD HAYAT', 'price': '2999', 'category': 'Premium Fragrance', 'image': 'assets/images/oud-hayat-rs-2999.jpeg'},
    {'id': 26, 'name': 'UROOSA By J.', 'price': '3499', 'category': 'Premium Fragrance', 'image': 'assets/images/uroosa-by-j.-rs-3499.jpeg'},
    {'id': 27, 'name': 'Wurood 4 by Rasasi', 'price': '4499', 'category': 'Premium Fragrance', 'image': 'assets/images/wardat-4-by-rasasi-rs-4499.jpeg'}
]

# We need to find the other 63 products from the files.
missing_files = []
for p in products:
    fname = p['image'].split('/')[-1]
    if fname not in files:
        missing_files.append(fname)

print(f"Missing Files from initial list: {missing_files}")

# Now list all files in assets/images and try to parse them
all_products = []
for f in files:
    if f.endswith('.jpeg') or f.endswith('.jpg'):
        # Try to parse name and price
        # Pattern: name-rs-price.jpeg or name-price.jpeg
        match = re.search(r'^(.*?)(?:-rs)?-(\d+)\.jpeg', f)
        if match:
            name = match.group(1).replace('-', ' ').title()
            price = match.group(2)
            all_products.append({'name': name, 'price': price, 'image': f'assets/images/{f}'})
        else:
            all_products.append({'name': f.split('.')[0].replace('-', ' ').title(), 'price': '999', 'image': f'assets/images/{f}'})

print(f"Found {len(all_products)} products in folder")

# Print them as JS objects for script.js
import json
print(json.dumps(all_products, indent=2))
