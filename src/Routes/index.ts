import express from 'express';
import EmployeeController from '../Controller/InventoryController';

const router = express.Router();

router.get('/inventory', EmployeeController.getAllInventoryList);
router.get('/inventory/:id', EmployeeController.getItem);
router.post('/inventory', EmployeeController.addNewItem);
router.put('/inventory/:id', EmployeeController.updateItem);
router.delete('/inventory/:id', EmployeeController.deleteItem);

export default router;