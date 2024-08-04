import { Request, Response } from 'express';
import { asyncHandler } from '../utils/async-handler';

// Services
import getInventoryListService from '../services/inventory/get-inventory-list';
import getInventoryItemService from '../services/inventory/get-inventory-item';
import AddInventoryItemService from '../services/inventory/add-inventory-item';
import UpdateInventoryItemService from '../services/inventory/update-inventory-item';
import DeleteInventoryItemService from '../services/inventory/delete-inventory-item';


class InvetoryController {
    public getAllInventoryList = asyncHandler((request: Request, response: Response): Promise<Response> => {
        return getInventoryListService(request, response);
    });

    public getItem = asyncHandler((request: Request, response: Response): Promise<Response> => {
        return getInventoryItemService(request, response);
    });

    public addNewItem = asyncHandler((request: Request, response: Response): Promise<Response> => {
        return AddInventoryItemService(request, response);
    });

    public updateItem = asyncHandler((request: Request, response: Response): Promise<Response> => {
        return UpdateInventoryItemService(request, response);
    });

    public deleteItem = asyncHandler((request: Request, response: Response): Promise<Response> => {
        return DeleteInventoryItemService(request, response);
    });
}

export default new InvetoryController();