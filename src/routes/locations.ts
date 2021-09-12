import express from 'express';
import { getLocation, addLocation } from '../controller/locations';

const router = express.Router();

router
  .route('/')
  .get(getLocation)
  .post(addLocation);

  module.exports = router;