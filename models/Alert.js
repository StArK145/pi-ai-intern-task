import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({

  pipeline_segment: {
    type: String,
    required: [true, 'Pipeline segment is required'],
    trim: true
  },
  detection_method: {
    type: String,
    required: [true, 'Detection method is required'],
    enum: {
      values: ['Method 1', 'Method 2', 'Method 3'],
      message: '{VALUE} is not a valid detection method'
    }
  },
  alert_type: {
    type: String,
    required: [true, 'Alert type is required'],
    enum: {
      values: ['leak', 'theft'],
      message: '{VALUE} is not a valid alert type. Choose leak or theft.'
    }
  },
  severity: {
    type: String,
    required: [true, 'Severity is required'],
    enum: {
      values: ['low', 'medium', 'high'],
      message: '{VALUE} is not a valid severity level'
    }
  },
  location_km: {
    type: Number,
    required: [true, 'Location (in km) is required'],
    min: [0, 'Location cannot be a negative number'] 
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'investigating', 'resolved'],
    default: 'active' 
  }
}, {
 
  timestamps: { 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  } 
});



const Alert = mongoose.model('Alert', alertSchema);

export default Alert;