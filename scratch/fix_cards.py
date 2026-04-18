
import os

path = r'c:\Users\NASA\Desktop\mosa bhai\Mousa-Bhai-Fragrances\style.css'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Segment 1: Container
old1 = """.product-slider .product-item {
    min-width: 220px !important;
    max-width: 220px !important;
    height: 320px !important;
    border-radius: 14px !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
    overflow: hidden !important;
    scroll-snap-align: start !important;
    flex-shrink: 0 !important;
    background: #f9f9f9 !important;
    display: flex !important;
    flex-direction: column !important;
    margin: 0 !important;
    border: none !important;
}"""

new1 = """.product-slider .product-item {
    min-width: 180px !important;
    max-width: 180px !important;
    height: auto !important;
    min-height: 280px !important;
    border-radius: 12px !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
    overflow: hidden !important;
    scroll-snap-align: start !important;
    flex-shrink: 0 !important;
    background: #111 !important; 
    display: flex !important;
    flex-direction: column !important;
    margin: 0 !important;
    border: 1px solid rgba(212, 175, 55, 0.1) !important;
    transition: transform 0.3s ease, border-color 0.3s ease !important;
}

.product-slider .product-item:hover {
    transform: translateY(-5px) !important;
    border-color: var(--gold) !important;
}"""

# Segment 2: Image
old2 = """.product-slider .product-item .img-wrapper {
    width: 100% !important;
    height: 180px !important;
    aspect-ratio: auto !important;
}

.product-slider .product-item img {
    width: 100% !important;
    height: 180px !important;
    object-fit: cover !important;
}"""

new2 = """.product-slider .product-item .img-wrapper {
    width: 100% !important;
    height: 140px !important;
    aspect-ratio: auto !important;
    background: #1a1a1a !important;
}

.product-slider .product-item img {
    width: 100% !important;
    height: 140px !important;
    object-fit: cover !important;
}"""

# Segment 3: Content & Typography
old3 = """.product-slider .product-item .product-content {
    padding: 12px !important;
    flex: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    background: #f9f9f9 !important;
}

.product-slider .product-item .product-title {
    font-size: 14px !important;
    font-weight: 600 !important;
    margin: 0 !important;
    color: #000 !important;
    white-space: normal !important;
    height: auto !important;
}

.product-slider .product-item .product-price {
    font-size: 13px !important;
    color: #888 !important;
    margin: 4px 0 !important;
}"""

new3 = """.product-slider .product-item .product-content {
    padding: 12px 10px !important;
    flex: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    background: transparent !important;
    text-align: center !important;
}

.product-slider .product-item .product-title {
    font-size: 13px !important;
    font-weight: 700 !important;
    margin: 0 !important;
    color: #fff !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    font-family: 'Cinzel', serif !important;
}

.product-slider .product-item .product-price {
    font-size: 12px !important;
    color: var(--gold) !important;
    margin: 5px 0 10px !important;
    font-weight: 500 !important;
}"""

# Segment 4: Buttons
old4 = """.product-slider .product-item .btn-buy-now {
    width: 100% !important;
    padding: 8px !important;
    background: #000 !important;
    color: #fff !important;
    border: none !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    font-size: 13px !important;
    margin-top: 6px !important;
}"""

new4 = """/* COMPACT BUTTONS */
.product-slider .product-item .btn-buy-now,
.product-slider .product-item .btn-add-to-cart {
    width: 100% !important;
    padding: 6px !important;
    border-radius: 4px !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    transition: 0.3s !important;
    cursor: pointer !important;
    margin-bottom: 5px !important;
    height: 32px !important;
}

.product-slider .product-item .btn-add-to-cart {
    background: rgba(255,255,255,0.05) !important;
    color: #fff !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
}

.product-slider .product-item .btn-buy-now {
    background: var(--gold) !important;
    color: #000 !important;
    border: none !important;
}

.product-slider .product-item .btn-add-to-cart:hover {
    background: rgba(255,255,255,0.1) !important;
    border-color: #fff !important;
}

.product-slider .product-item .btn-buy-now:hover {
    background: #fff !important;
    color: #000 !important;
}"""

# Perform replacements
c_new = content.replace(old1, new1)
c_new = c_new.replace(old2, new2)
c_new = c_new.replace(old3, new3)
c_new = c_new.replace(old4, new4)

if c_new == content:
    print("No changes made. Check matching logic.")
else:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c_new)
    print("Successfully updated style.css")
