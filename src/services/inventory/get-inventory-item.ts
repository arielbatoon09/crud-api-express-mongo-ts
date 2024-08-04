import { Request, Response } from 'express';
import { InventoryModel } from '../../model/Inventory.model';
import { responseHandler } from '../../utils/response-handler';

export default async function getInventoryItemService(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = await InventoryModel.findById(id);

    return responseHandler(response, 200, 'Fetched data.', data);
}