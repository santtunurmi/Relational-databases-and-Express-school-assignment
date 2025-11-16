import { User } from '../models/Index.js'
import { StatusCodes } from 'http-status-codes'

const getUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: {exclude : ['username']},
  })
  res.status(StatusCodes.OK).json({ success: true, data: users })
}

const createUser = async (req, res) => {
  const { id, name, username } = req.body
  const user = await User.create({id, name, username})
  return res.status(StatusCodes.CREATED).send({ success: true, data: user })
}

export { getUsers, createUser }