import Vehicle from '../models/Vehicle.js'
import { StatusCodes } from 'http-status-codes'

const getVehicles = async (req, res) => {
  const vehicles = await Vehicle.findAll()
  res.status(StatusCodes.OK).json({ success: true, data: vehicles })
}

const createVehicle = async (req, res) => {
  const { make, model, license_plate, commissioned } = req.body
  const type = Math.round(Math.random()) > 0 ? 'Van' : 'Passenger car'
  const vehicle = await Vehicle.create({make, model, type, license_plate, commissioned})
  return res.status(StatusCodes.CREATED).send({ success: true, data: vehicle })  
}

const getSingleVehicle = async (req, res) => {
  return res.status(StatusCodes.OK).json({ success: true, data: req.vehicle })   
}

const updateVehicle = async (req, res) => {
  req.vehicle.commissioned = !req.vehicle.commissioned
  await req.vehicle.save()
  res.status(StatusCodes.OK).json({ success: true, data: req.vehicle })   
}

const deleteVehicle = async (req, res) => {
  await req.vehicle.destroy()
  return res.status(StatusCodes.OK).json({ success: true })
}

export {
  getVehicles,
  createVehicle,
  getSingleVehicle,
  updateVehicle,
  deleteVehicle
}
