import { Document, Types } from 'mongoose';

export interface Product extends Document {
  Seller: Types.ObjectId;
  SellerName: string;
  Images: [];
  Name: string;
  Price: number;
}
