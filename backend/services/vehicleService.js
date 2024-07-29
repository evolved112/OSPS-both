const Vehicle = require('../models/vehicleModel');

class VehicleService {
  async addVehicle(make, numberPlate, VIN, vehicleType, parkedLocation) {
    const vehicle = await Vehicle.create({ make, numberPlate, VIN, vehicleType, parkedLocation });
    return vehicle;
  }

  async getVehicleByVIN(VIN) {
    const vehicle = await Vehicle.findOne({ where: { VIN } });
    if (!vehicle) throw new Error('Vehicle not found');
    return vehicle;
  }

  async updateVehicle(VIN, updateData) {
    const vehicle = await this.getVehicleByVIN(VIN);
    Object.assign(vehicle, updateData);
    await vehicle.save();
    return vehicle;
  }

  async deleteVehicle(VIN) {
    const vehicle = await this.getVehicleByVIN(VIN);
    await vehicle.destroy();
    return vehicle;
  }
}

module.exports = new VehicleService();
