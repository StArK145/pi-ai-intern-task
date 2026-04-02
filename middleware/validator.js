import { body, validationResult } from 'express-validator';


export const validateAlert = [
  body('pipeline_segment').notEmpty().withMessage('Pipeline segment is required'),
  body('detection_method').isIn(['Method 1', 'Method 2', 'Method 3']).withMessage('Detection method must be Method 1, Method 2, or Method 3'),
  body('alert_type').isIn(['leak', 'theft']).withMessage('Alert type must be leak or theft'),
  body('severity').isIn(['low', 'medium', 'high']).withMessage('Severity must be low, medium, or high'),
  body('location_km').isFloat({ min: 0 }).withMessage('Location must be a positive number'),
  body('status').optional().isIn(['active', 'investigating', 'resolved']).withMessage('Invalid status')
];


export const checkValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    return res.status(400).json({ errors: errors.array() });
  }
  next(); 
};