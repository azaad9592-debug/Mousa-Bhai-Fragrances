const fs = require('fs');

const files = ['index.html', 'shop.html', 'info.html', 'about.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // 1. Replace the footer email address with the order page link
    // Pattern: <i class="fa-solid fa-envelope"></i> <a href="mailto:moosakhanbaloch672@gmail.com" ...>moosakhanbaloch672@gmail.com</a>
    // Replace with: <i class="fa-solid fa-file-invoice"></i> <a href="order.html" ...>Place Order (Form)</a>
    content = content.replace(
        /<i class="fa-solid fa-envelope"><\/i>\s*<a href="mailto:moosakhanbaloch672@gmail\.com" style="color: inherit; text-decoration: none; word-break: break-all;">moosakhanbaloch672@gmail\.com<\/a>/g,
        '<i class="fa-solid fa-file-invoice"></i> <a href="order.html" style="color: inherit; text-decoration: none; word-break: break-all;">Place Order Form</a>'
    );

    // 2. Replace the social links email icon with the order page link
    content = content.replace(
        /href="mailto:moosakhanbaloch672@gmail\.com" title="Order via Email"/g,
        'href="order.html" title="Order via Form"'
    );

    // 3. Update the info.html Electronic Mail section specifically
    if (file === 'info.html') {
        content = content.replace(
            /Electronic Mail<\/h4>\s*<a href="mailto:moosakhanbaloch672@gmail\.com"/g,
            'Order Portal</h4> <a href="order.html"'
        );
        content = content.replace(
            /moosakhanbaloch672@gmail\.com<\/a>/g,
            'Go to Order Page</a>'
        );
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated order links in ${file}`);
}
