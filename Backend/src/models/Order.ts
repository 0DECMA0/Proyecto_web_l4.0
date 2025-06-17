import {Document, model, Schema, Types} from "mongoose";

export interface IOrder extends Document{
    _id: Types.ObjectId;
    idUser: Types.ObjectId;
    createDate: Date;
    status: string;
    updateDate: Date;
}

const orderSchema = new Schema<IOrder>({
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    updateDate: {
        type: Date,
        default: Date.now
    }
});

// Middleware para actualizar updateDate antes de guardar
orderSchema.pre('save', function(next) {
    this.updateDate = new Date();
    next();
});

export const Order = model<IOrder>('Order', orderSchema, 'order');