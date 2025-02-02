import express from 'express';
import InventoryController from '../controller/inventory.controller';

const router = express.Router();

router.get('/inventory', InventoryController.getAllInventoryList);
router.get('/inventory/:id', InventoryController.getItem);
router.post('/inventory', InventoryController.addNewItem);
router.put('/inventory/:id', InventoryController.updateItem);
router.post('/inventory/delete', InventoryController.deleteItem);

export default router;