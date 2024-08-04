import { Request, Response } from 'express';
import { InventoryModel } from '../../model/Inventory.model';
import { responseHandler } from '../../utils/response-handler';

export default async function UpdateInventoryItemService(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { item_name, item_description, item_quantity, item_price } = request.body;
    const data = await InventoryModel.findById(id);

    if (!data) {
        return response.status(404).json({ response: 'error', message: 'Item not found.' });
    }

    data.item_name = item_name;
    data.item_description = item_description;
    data.item_quantity = item_quantity;
    data.item_price = item_price;

    await data.save();

    return responseHandler(response, 200, 'Updated item.', data);
}