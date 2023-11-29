const process = require('process');

console.log(process.argv[2]);

const [,, leaseId, licenseNumber] = process.argv

console.log("lease id - ", leaseId, "license number", licenseNumber)