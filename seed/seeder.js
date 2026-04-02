import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Alert from '../models/Alert.js';


dotenv.config();


connectDB();

const sampleAlerts = [
  {
    pipeline_segment: 'Assam-North-12',
    detection_method: 'Method 1',
    alert_type: 'leak',
    severity: 'high',
    location_km: 145.2,
    status: 'active'
  },
  {
    pipeline_segment: 'Gujarat-West-05',
    detection_method: 'Method 2',
    alert_type: 'theft',
    severity: 'medium',
    location_km: 42.8,
    status: 'investigating'
  },
  {
    pipeline_segment: 'Mumbai-South-01',
    detection_method: 'Method 3',
    alert_type: 'leak',
    severity: 'low',
    location_km: 12.5,
    status: 'resolved'
  },
  {
    pipeline_segment: 'Delhi-East-09',
    detection_method: 'Method 1',
    alert_type: 'theft',
    severity: 'high',
    location_km: 210.0,
    status: 'active'
  },
  {
    pipeline_segment: 'Assam-North-12',
    detection_method: 'Method 2',
    alert_type: 'leak',
    severity: 'medium',
    location_km: 148.5,
    status: 'active'
  }
];

const importData = async () => {
  try {
    
    await Alert.deleteMany();
    console.log('Previous alerts deleted...');

   
    await Alert.insertMany(sampleAlerts);
    console.log('Database successfully seeded with 5 sample alerts!');

    process.exit();
  } catch (error) {
    console.error(`Error during seeding: ${error.message}`);
    process.exit(1); 
  }
};


importData();