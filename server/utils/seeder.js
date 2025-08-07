
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();

    const scrapedData = fs.readFileSync(path.join(__dirname, 'scraped-products.json'), 'utf-8');
    const scrapedProducts = JSON.parse(scrapedData);

    const productsToInsert = scrapedProducts.map((p, index) => ({
      productId: `${index + 1}`, // Generate a simple ID
      name: p.name,
      brand: 'Maher Zarai Markaz', // Default brand
      price: 0, // Default price
      images: [`/products/${p.image.split('/').pop()}`], // Use the image name and point to the local /products folder
      rating: 0, // Default rating
      reviews: 0, // Default reviews
      isSoldOut: false, // Default isSoldOut
      category: p.category,
      description: p.description,
      packing: p.packing,
    }));

    await Product.insertMany(productsToInsert);

    console.log('Data Imported Successfully from scraped data!');
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
