import mongoose, { Document, Schema } from 'mongoose';

interface Inventory extends Document {
    item_name: string;
    item_description: string;
    item_quantity: number;
    item_price: number;
}

const InventorySchema: Schema<Inventory> = new Schema({
    item_name: {
        type: String,
        required: true,
    },
    item_description: {
        type: String,
        required: true,
    },
    item_quantity: {
        type: Number,
        required: true,
    },
    item_price: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

export const InventoryModel = mongoose.model<Inventory>('Inventory', InventorySchema);
