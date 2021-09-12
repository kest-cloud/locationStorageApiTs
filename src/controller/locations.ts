export{};
import Location from '../models/locations';


// @access Public
export const getLocation = async (req, res, next) => {
  try {
    const locations = await Location.find();

    return res.status(200).json({
      success: true,
      count: locations.length,
      data: locations
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc  Create a store
// @route POST /api/v1/stores
// @access Public
export const addLocation = async (req, res, next) => {
  try {
    const location = await Location.create(req.body);

    return res.status(201).json({
      success: true,
      data: location
    });
  } catch (err:any) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'This Point already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
  next();
};
