
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Product = require('../models/Product');
const { mockProducts } = require('./product-data.js');

dotenv.config({ path: './server/.env' });

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();

    const productsToInsert = mockProducts.map(p => ({
      ...p,
      productId: p.id, 
    }));

    await Product.insertMany(productsToInsert);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error during data import: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();

    console.log('Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error during data destruction: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
