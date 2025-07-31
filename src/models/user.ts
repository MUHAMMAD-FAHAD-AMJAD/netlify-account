
/**
 * @fileoverview Defines the TypeScript types for a User.
 * This file serves as the blueprint for the User model in MongoDB.
 * A Mongoose schema should be created based on this type definition.
 */

// This is the core User type definition.
// In an Express/Mongoose backend, you would create a Schema like this:
/*
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  // You might add other fields like shippingAddress, etc.
}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', UserSchema);
*/

// For now, we will define a simple TypeScript type.
export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}
