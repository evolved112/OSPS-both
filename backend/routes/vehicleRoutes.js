const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/add', vehicleController.addVehicle);
router.get('/:VIN', vehicleController.getVehicle);
router.put('/:VIN', vehicleController.updateVehicle);
router.delete('/:VIN', vehicleController.deleteVehicle);

module.exports = router;
