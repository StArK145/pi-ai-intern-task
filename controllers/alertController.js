import Alert from '../models/Alert.js';


export const createAlert = async (req, res) => {
  try {
    const alert = await Alert.create(req.body);
    res.status(201).json(alert);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


export const getAlerts = async (req, res) => {
  try {
    // 1. Extract query parameters
    const { status, alert_type, page = 1, limit = 10 } = req.query;

    // 2. Build the filter object dynamically
    const filter = {};
    if (status) filter.status = status;
    if (alert_type) filter.alert_type = alert_type;

    // 3. Calculate pagination values
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    // 4. Execute query with filters, skip, and limit
    const alerts = await Alert.find(filter)
      .skip(skip)
      .limit(limitNum)
      .sort({ created_at: -1 }); // Sort newest first

    // 5. Get total count for metadata
    const total_alerts = await Alert.countDocuments(filter);

    // 6. Return standard paginated response
    res.status(200).json({
      total_alerts,
      total_pages: Math.ceil(total_alerts / limitNum),
      current_page: pageNum,
      limit: limitNum,
      data: alerts
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


export const getAlertById = async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id);
    if (!alert) return res.status(404).json({ message: 'Alert not found' });
    
    res.status(200).json(alert);
  } catch (error) {
    res.status(500).json({ message: 'Invalid ID format or Server Error' });
  }
};


export const updateAlert = async (req, res) => {
  try {
    const alert = await Alert.findByIdAndUpdate(req.params.id, req.body, { 
      new: true, 
      runValidators: true 
    });

    if (!alert) return res.status(404).json({ message: 'Alert not found' });

    res.status(200).json(alert);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


export const deleteAlert = async (req, res) => {
  try {
    const alert = await Alert.findByIdAndDelete(req.params.id);
    if (!alert) return res.status(404).json({ message: 'Alert not found' });


    res.status(200).json({ message: 'Alert successfully deleted', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};