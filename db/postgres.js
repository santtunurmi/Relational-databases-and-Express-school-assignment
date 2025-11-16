import { Sequelize } from 'sequelize'
const { DATABASE_URL } = process.env

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: console.log,
})

export default sequelize
