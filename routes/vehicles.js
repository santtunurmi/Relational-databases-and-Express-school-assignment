import express from 'express'
const router = express.Router()
import findVehicle from '../middleware/findVehicle.js'

import {
  getVehicles,
  createVehicle,
  getSingleVehicle,
  updateVehicle,
  deleteVehicle,
} from '../controllers/vehicles.js'


router.get('/', getVehicles)
router.post('/', createVehicle)
router.get('/:id', findVehicle, getSingleVehicle)
router.put('/:id', findVehicle, updateVehicle)
router.delete('/:id', findVehicle, deleteVehicle)

export default router
