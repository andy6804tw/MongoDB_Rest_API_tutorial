import express from 'express'
import contants from './config/constants'
import './config/database'
import middlewaresConfig from './config/middlewares'
import apiRoutes from './modules'

const app = express()

middlewaresConfig(app)
apiRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello woeld!')
})

app.listen(contants.PORT, (err) => {
  if (err) {
    throw err
  } else {
    console.log(`Server running on port: ${contants.PORT}
    ---
    Running on ${process.env.NODE_ENV}
    ---
    Make something great
    `)
  }
})
