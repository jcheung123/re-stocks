const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String
}, {
    timestamps: true
});

const portfolioSchema = new Schema({
    user: userSchema,
    description: String,
    watchlist: [{type: Schema.Types.ObjectId, ref: 'Stock'}],
}, {
    timestamps: true
});


module.exports = mongoose.model('Portfolio', portfolioSchema)