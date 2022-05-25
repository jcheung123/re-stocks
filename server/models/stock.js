const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const stockSchema = new Schema({
    logo: String,
    ticker: String,
    name: String,
    exchange: ticker,
    marketCapitalization: Number,
    finnhubIndustry: String
}, {
    timestamp: true
})

module.exports = mongoose.model('Stock', stockSchema)