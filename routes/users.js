import express from 'express'
const router = express.Router()

import {
  getUsers,
  createUser,
} from '../controllers/users.js'


router.get('/', getUsers)
router.post('/', createUser)

export default router
