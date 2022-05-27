const express = require('express');
const router = express.Router();
const portfolioCtrl = require('../controllers/portfolio')

router.get('/', (req, res) => {
    portfolioCtrl.getAllStocks(req, res)
})

router.post('/', (req, res) => {
    portfolioCtrl.addStock(req, res)
})

router.delete('/:id', (req, res) => {
    portfolioCtrl.removeStock(req, res)
})


module.exports = router;