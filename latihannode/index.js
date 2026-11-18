const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'catatan.txt');

// tulis file
fs.writeFileSync(filePath, 'Belajar Node.js itu mantapp');
console.log('File berhasil dibuat di:', filePath);

// Baca file
const isiFile = fs.readFileSync(filePath, 'utf-8');
console.log('isi file:', isiFile)