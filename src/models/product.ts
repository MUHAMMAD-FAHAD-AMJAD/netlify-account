
/**
 * @fileoverview Defines the TypeScript types for a Product.
 * This file serves as the blueprint for the Product model in MongoDB.
 * A Mongoose schema should be created based on this type definition.
 */

// This is the core Product type definition.
// In an Express/Mongoose backend, you would create a Schema like this:
/*
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  images: [{ type: String, required: true }],
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  isSoldOut: { type: Boolean, default: false },
  category: { type: String, required: true, index: true },
  subcategory: { type: String, index: true },
  tags: [String],
  description: { type: String },
  stock: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
*/

// For now, we will just use the existing TypeScript type from the frontend.
export type { Product } from '@/lib/types';
