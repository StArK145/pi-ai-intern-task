import express from 'express';
import { 
  createAlert, 
  getAlerts, 
  getAlertById, 
  updateAlert, 
  deleteAlert ,
  getAlertSummary
} from '../controllers/alertController.js';
import { validateAlert, checkValidationErrors } from '../middleware/validator.js';

const router = express.Router();


router.post('/', validateAlert, checkValidationErrors, createAlert);
router.get('/', getAlerts);
router.get('/summary', getAlertSummary);


router.get('/:id', getAlertById);
router.put('/:id', validateAlert, checkValidationErrors, updateAlert);
router.delete('/:id', deleteAlert);

export default router;