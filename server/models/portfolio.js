const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const portfolioSchema = new Schema({
    logo: String,
    ticker: String,
    name: String,
    exchange: String,
    marketCapitalization: Number,
    finnhubIndustry: String
}, {
    timestamp: true
})

module.exports = mongoose.model('Portfolio', portfolioSchema)