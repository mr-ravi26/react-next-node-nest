import * as mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
  Seller: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  Images: {
    type: Array,
  },
  Name: {
    type: String,
    required: true,
    text: true,
  },
  Price: {
    type: Number,
    required: true,
  },
});

productSchema.index({ Name: 'text', Model: 'text' });
