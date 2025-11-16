import express from 'express'
const app = express()
import 'express-async-errors';
const { PORT } = process.env

import sequelize from './db/postgres.js'

import vehicles from './routes/vehicles.js'
import errorHandler from './middleware/errorhandler.js'

// static assets
app.use(express.static('./public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/vehicles', vehicles)

app.use(errorHandler)

const eraseDatabaseOnSync = process.env.ERASE || false

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`) 
  })
})

