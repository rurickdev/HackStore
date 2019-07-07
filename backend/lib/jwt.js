const jwt = require('jsonwebtoken')

const key = 'superSecretKey'
const ttl = '8h'

module.exports = {
    create(data, secret = key) {
        return new Promise((resolve, reject) => {
            jwt.sign(data, secret, { expiresIn: ttl }, (error, token) => {
                if (error) return (error);
                resolve(token);
            })
        })
    },
    verify(token, secret = key) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secret, (error, decoded) => {
                if (error) return reject(error);
                resolve(decoded);
            });
        });
    }
}