import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({
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

export const InventoryModel = mongoose.model("Inventory", InventorySchema);