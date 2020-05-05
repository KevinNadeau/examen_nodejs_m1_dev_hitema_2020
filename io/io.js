const fs = require('fs').promises;
module.exports.decodeHexFileContent = (filePath) => {
    return new Promise((resolve, reject) => {
        // To be implemented!
        let encode = fs.readFileSync(filePath, 'utf8');
        let response = Buffer.from(encode, 'hex').toString('utf8');
        resolve(response);

        if (encode === null) { reject() }
    });
}