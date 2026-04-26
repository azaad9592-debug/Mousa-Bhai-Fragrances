const fs = require('fs');

const files = ['index.html', 'shop.html', 'info.html', 'about.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // 1. Revert footer text to email address but keep link to order.html
    // Old: <i class="fa-solid fa-file-invoice"></i> <a href="order.html" style="color: inherit; text-decoration: none; word-break: break-all;">Place Order Form</a>
    // New: <i class="fa-solid fa-envelope"></i> <a href="order.html" style="color: inherit; text-decoration: none; word-break: break-all;">moosakhanbaloch672@gmail.com</a>
    content = content.replace(
        /<i class="fa-solid fa-file-invoice"><\/i>\s*<a href="order.html" style="color: inherit; text-decoration: none; word-break: break-all;">Place Order Form<\/a>/g,
        '<i class="fa-solid fa-envelope"></i> <a href="order.html" style="color: inherit; text-decoration: none; word-break: break-all;">moosakhanbaloch672@gmail.com</a>'
    );

    // 2. Update social link title
    content = content.replace(
        /title="Order via Form"/g,
        'title="Order via Email Form"'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Reverted footer email text in ${file}`);
}
