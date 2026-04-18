
const fs = require('fs');
const path = 'style.css';
let content = fs.readFileSync(path, 'utf8');

const old1 = `.product-slider .product-item {
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
}`;

const new1 = `.product-slider .product-item {
    min-width: 170px !important;
    max-width: 170px !important;
    height: auto !important;
    min-height: 270px !important;
    border-radius: 12px !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4) !important;
    overflow: hidden !important;
    background: #111 !important; 
    border: 1px solid rgba(212, 175, 55, 0.1) !important;
    display: flex !important;
    flex-direction: column !important;
    scroll-snap-align: start !important;
    flex-shrink: 0 !important;
    transition: 0.3s !important;
}

.product-slider .product-item:hover {
    transform: translateY(-5px) !important;
    border-color: var(--gold) !important;
}`;

const old2 = `.product-slider .product-item .img-wrapper {
    width: 100% !important;
    height: 180px !important;
    aspect-ratio: auto !important;
}

.product-slider .product-item img {
    width: 100% !important;
    height: 180px !important;
    object-fit: cover !important;
}`;

const new2 = `.product-slider .product-item .img-wrapper {
    width: 100% !important;
    height: 120px !important;
    aspect-ratio: auto !important;
    background: #1a1a1a !important;
}

.product-slider .product-item img {
    width: 100% !important;
    height: 120px !important;
    object-fit: cover !important;
}`;

const old3 = `.product-slider .product-item .product-content {
    padding: 12px !important;
    flex: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    background: #f9f9f9 !important;
}`;

const new3 = `.product-slider .product-item .product-content {
    padding: 10px !important;
    flex: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    background: transparent !important;
    text-align: center !important;
}`;

const old4 = `.product-slider .product-item .product-title {
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
}`;

const new4 = `.product-slider .product-item .product-title {
    font-size: 11px !important;
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
    font-size: 11px !important;
    color: var(--gold) !important;
    margin: 3px 0 8px !important;
    font-weight: 500 !important;
}`;

const old5 = `.product-slider .product-item .btn-buy-now {
    width: 100% !important;
    padding: 8px !important;
    background: #000 !important;
    color: #fff !important;
    border: none !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    font-size: 13px !important;
    margin-top: 6px !important;
}`;

const new5 = `.product-slider .product-item .btn-buy-now,
.product-slider .product-item .btn-add-to-cart {
    width: 100% !important;
    padding: 5px !important;
    border-radius: 3px !important;
    font-size: 10px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    height: 28px !important;
    margin-bottom: 4px !important;
    cursor: pointer !important;
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
}`;

content = content.replace(old1, new1);
content = content.replace(old2, new2);
content = content.replace(old3, new3);
content = content.replace(old4, new4);
content = content.replace(old5, new5);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated style.css');
