const fs = require('fs');

const files = ['index.html', 'shop.html', 'info.html', 'about.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // 1. Update Footer Contact List Email
    // Old: <i class="fa-solid fa-envelope"></i> \n <span style="display: block; word-break: break-all;">moosakhanbaloch672@gmail.com</span>
    // New: <i class="fa-solid fa-envelope"></i> \n <a href="mailto:moosakhanbaloch672@gmail.com" style="color: inherit; text-decoration: none; word-break: break-all;">moosakhanbaloch672@gmail.com</a>
    content = content.replace(
        /<i class="fa-solid fa-envelope"><\/i>\s*<span style="display: block; word-break: break-all;">moosakhanbaloch672@gmail\.com<\/span>/g,
        '<i class="fa-solid fa-envelope"></i> <a href="mailto:moosakhanbaloch672@gmail.com" style="color: inherit; text-decoration: none; word-break: break-all;">moosakhanbaloch672@gmail.com</a>'
    );

    // 2. Also check for the variation where it might not have the span yet (older versions)
    content = content.replace(
        /<span>moosakhanbaloch672@gmail\.com<\/span>/g,
        '<a href="mailto:moosakhanbaloch672@gmail.com" style="color: inherit; text-decoration: none;">moosakhanbaloch672@gmail.com</a>'
    );

    // 3. Update the social links email icon if it exists
    // Old: <a href="javascript:void(0)" onclick="openEmailSheet()" title="Order via Email"><i class="fa-solid fa-envelope"></i></a>
    // New: <a href="mailto:moosakhanbaloch672@gmail.com" title="Order via Email"><i class="fa-solid fa-envelope"></i></a>
    content = content.replace(
        /<a href="javascript:void\(0\)" onclick="openEmailSheet\(\)" title="Order via Email"><i class="fa-solid fa-envelope"><\/i><\/a>/g,
        '<a href="mailto:moosakhanbaloch672@gmail.com" title="Order via Email"><i class="fa-solid fa-envelope"></i></a>'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated email links in ${file}`);
}
