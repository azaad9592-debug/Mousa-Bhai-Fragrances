const fs = require('fs');

let scriptJs = fs.readFileSync('script.js', 'utf8');

// 1. Bump CACHE_VERSION
scriptJs = scriptJs.replace("const CACHE_VERSION = '3.0';", "const CACHE_VERSION = '4.0';");

// 2. Fix sync logic to include isBestSeller
const syncLogicOld = "if (existing.brand !== defaultProd.brand) { existing.brand = defaultProd.brand; changed = true; }";
const syncLogicNew = "if (existing.brand !== defaultProd.brand) { existing.brand = defaultProd.brand; changed = true; }\n        if (existing.isBestSeller !== defaultProd.isBestSeller) { existing.isBestSeller = defaultProd.isBestSeller; changed = true; }";

scriptJs = scriptJs.replace(syncLogicOld, syncLogicNew);

fs.writeFileSync('script.js', scriptJs, 'utf8');
console.log('Fixed script.js sync logic and bumped cache version');
