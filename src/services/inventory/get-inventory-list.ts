import { Request, Response } from 'express';
import { InventoryModel } from '../../model/Inventory.model';
import { responseHandler } from '../../utils/response-handler';

export default async function getInventoryListService(request: Request, response: Response): Promise<Response> {
    const data = await InventoryModel.find();
    return responseHandler(response, 200, 'Fetched data.', data);
}