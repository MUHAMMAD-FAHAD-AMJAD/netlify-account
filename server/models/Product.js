const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  images: [{ type: String }],
  rating: { type: Number },
  reviews: { type: Number },
  isSoldOut: { type: Boolean, default: false },
  imageHint: { type: String },
  category: { type: String, required: true },
  subcategory: { type: String },
  tags: [{ type: String }],
  description: { type: String, required: true },
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
