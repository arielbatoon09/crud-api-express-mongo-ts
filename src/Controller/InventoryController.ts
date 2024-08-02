import { Request, Response } from 'express';
import { InventoryModel } from '../Model/Inventory';

class InvetoryController {
    public getAllInventoryList = async (request: Request, response: Response): Promise<Response> => {
        try {
            const getInventory = await InventoryModel.find();

            return response.status(200).json({ data: getInventory, response: 'success' });
        } catch (error) {
            return response.sendStatus(400);
        }
    };

    public getItem = async (request: Request, response: Response): Promise<Response> => {
        try {
            const { id } = request.params;
            const item = await InventoryModel.findById(id);

            return response.status(200).json({ data: item, response: 'success' });
        } catch (error) {
            return response.sendStatus(400);
        }
    };

    public addNewItem = async (request: Request, response: Response): Promise<Response> => {
        try {
            const { item_name, item_description, item_quantity, item_price } = request.body;

            const item = new InventoryModel({
                item_name,
                item_description,
                item_quantity,
                item_price
            });
            await item.save();

            return response.status(201).json({ message: 'Added new item in the inventory.', data: item, response: 'success' });
        } catch (error) {
            return response.sendStatus(400);
        }
    };

    public updateItem = async (request: Request, response: Response): Promise<Response> => {
        try {
            const { id } = request.params;
            const { item_name, item_description, item_quantity, item_price } = request.body;
            const item = await InventoryModel.findById(id);

            if (!item) {
                return response.status(404).json({ response: 'error', message: 'Item not found.' });
            }

            item.item_name = item_name;
            item.item_description = item_description;
            item.item_quantity = item_quantity;
            item.item_price = item_price;

            await item.save();
            return response.status(200).json({ message: 'Updated item.', data: item, response: 'success' });
        } catch (error) {
            return response.sendStatus(400);
        }
    };

    public deleteItem = async (request: Request, response: Response): Promise<Response> => {
        try {
            const { id } = request.params;
            await InventoryModel.findByIdAndDelete({ _id: id });

            return response.status(200).json({ message: 'Deleted item.', response: 'success' });

        } catch (error) {
            return response.sendStatus(400);
        }
    };

    public bulkDelete = async (request: Request, response: Response) => {
        try {

        } catch (error) {
            return response.sendStatus(400);
        }
    };
}

export default new InvetoryController();