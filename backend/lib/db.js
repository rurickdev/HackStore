const mongoose = require('mongoose');

const connect = () => new Promise((resolve, reject) => {
    mongoose.connect('mongodb://hackapalooza_admin:fCm34EoGVVaD4Z75@ds347917.mlab.com:47917/hackapalooza', {
        useNewUrlParser: true
    })
})

const db = mongoose.connection

db.on('open', () => {
    console.warn('connection open')
})

db.on('error', (error) => {
    console.error('NO SE PUDO CONECAR: ', error)
    reject(error)
})

module.exports = {
    connect
}