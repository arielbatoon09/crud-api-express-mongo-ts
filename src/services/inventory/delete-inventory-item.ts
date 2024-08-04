import { Request, Response } from 'express';
import { InventoryModel } from '../../model/Inventory.model';
import { responseHandler } from '../../utils/response-handler';

export default async function DeleteInventoryItemService(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    let message = null;

    // Bulk Delete
    if (Array.isArray(id)) {
        await InventoryModel.deleteMany({ _id: { $in: id } });
        message = 'Bulk delete successfully.';
    } else {
        // Single Delete
        await InventoryModel.findByIdAndDelete({ _id: id });
        message = 'Deleted item.';
    }

    return responseHandler(response, 200, message, null);
}