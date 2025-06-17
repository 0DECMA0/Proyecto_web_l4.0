import {Document, model, Schema, Types} from "mongoose";

export interface IProduct extends Document{
    _id: Types.ObjectId;
    name: string;
    description: string;
    qty: number;
    status: boolean;
    price: number;
    createDate: Date;
    deleteDate: Date;
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: Boolean,
        default: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    deleteDate: {
        type: Date
    }
});

export const Product = model<IProduct>('Product', productSchema, 'product');