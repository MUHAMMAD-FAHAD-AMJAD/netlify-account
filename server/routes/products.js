const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

module.exports = router;
