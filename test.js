global.document = {};
document.documentElement = {};
document.documentElement.tagName = "html";

var QRCode = require('./qrcode');

if (!(typeof QRCode == 'function' && 'CorrectLevel' in QRCode)) {
    process.stdout.write("QRCode is not exported properly\n");
    process.exit(1);
} 
