import express from 'express'
// import dotenv from 'dotenv' // It's not neccesary, now node can read .env files by default with the option "--env-file name_of_file" exp: "ts-node-dev --env-file .env src/index.ts"
import router from './routes/users.routes'
import path from 'path'
import morgan from 'morgan'

// dotenv.config()

const app = express()

app.use(morgan(':remote-addr [:date[clf]] :method :url :status - :response-time ms'))
app.use(express.json())

app.get('/', express.static(path.join(__dirname, '../public'))) // Relative to this project

app.use('/api/users', router)

app.use((_req, res) => {
  res.status(404)
  res.send('<h1>Error 404: Resource not found</h1>')
})

const port: number = process.env.PORT as unknown as number

app.listen(port, () => {
  console.log('Server is running on port ' + port.toString())
})
