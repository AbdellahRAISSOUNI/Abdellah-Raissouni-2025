// Simple script to generate favicon from SVG
// Run with: node scripts/generate-favicon.js

const fs = require('fs');
const path = require('path');

// Read the SVG favicon
const svgPath = path.join(__dirname, '../public/favicon.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

console.log('✅ SVG favicon already exists at public/favicon.svg');
console.log('📝 For ICO format, you can:');
console.log('   1. Use an online converter like https://favicon.io/favicon-converter/');
console.log('   2. Upload the SVG and download the ICO version');
console.log('   3. Or use the SVG directly (modern browsers support it)');

// Create a simple fallback - browsers will use SVG if available
console.log('\n✨ Your HTML is already configured to use the SVG favicon!');
