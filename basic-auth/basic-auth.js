const crypto = require('crypto');
const HttpStatus = require('http-status-codes');

function sha1Encode(data) {
    // To be implemented!
    return crypto.createHash('sha1').update(data).digest('hex');
}

module.exports.digestAuth = (request, response, next) => {
    // To be implemented!
    const authorization = request.headers.authorization;
    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    // 'user:paswword'
    const authentication = decoded.split(':');

    const isValid = authentication[0] === 'node' &&
        authentication[1] === sha1Encode('password');

    // si pas authentifié
    isValid ? next() : response.sendStatus(HttpStatus.HTTP_CODE_UNAUTHORIZED);
};