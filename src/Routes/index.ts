import express from 'express';
import InventoryController from '../Controller/InventoryController';

const router = express.Router();

router.get('/inventory', InventoryController.getAllInventoryList);
router.get('/inventory/:id', InventoryController.getItem);
router.post('/inventory', InventoryController.addNewItem);
router.put('/inventory/:id', InventoryController.updateItem);
router.delete('/inventory/:id', InventoryController.deleteItem);

export default router;