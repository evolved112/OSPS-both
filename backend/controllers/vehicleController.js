const VehicleService = require('../services/vehicleService');

class VehicleController {
  async addVehicle(req, res) {
    try {
      const { make, numberPlate, VIN, vehicleType, parkedLocation } = req.body;
      const vehicle = await VehicleService.addVehicle(make, numberPlate, VIN, vehicleType, parkedLocation);
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getVehicle(req, res) {
    try {
      const { VIN } = req.params;
      const vehicle = await VehicleService.getVehicleByVIN(VIN);
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateVehicle(req, res) {
    try {
      const { VIN } = req.params;
      const updateData = req.body;
      const vehicle = await VehicleService.updateVehicle(VIN, updateData);
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteVehicle(req, res) {
    try {
      const { VIN } = req.params;
      await VehicleService.deleteVehicle(VIN);
      res.status(200).json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new VehicleController();
