// const User = require('../models/user');
const Portfolio = require('../models/portfolio');




async function addStock (req, res) {
    await Portfolio.create(req.body)
    try {
        res.send({
            status: 200
         })
    } catch (err) {
        res.json({err});
    }
}

// ticker
async function removeStock (req, res) {
    await Portfolio.findByIdAndRemove(req.params.id)
    try {
        res.send({
            status: 200,
         })
    } catch (err) {
        res.json({err});
    }
}


module.exports = {

    addStock,
    removeStock
}