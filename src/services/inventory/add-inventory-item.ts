import { Request, Response } from 'express';
import { InventoryModel } from '../../model/Inventory.model';
import { responseHandler } from '../../utils/response-handler';

export default async function AddInventoryItemService(request: Request, response: Response): Promise<Response> {
    const { item_name, item_description, item_quantity, item_price } = request.body;

    const data = new InventoryModel({
        item_name,
        item_description,
        item_quantity,
        item_price
    });
    await data.save();

    return responseHandler(response, 201, 'Added new item in the inventory.', data);
}