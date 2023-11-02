import express from 'express'
import { database } from './database'
import { adminJsRouter, adminjs } from './adminjs'

const app = express()
app.use(express.static('public'))
app.use(adminjs.options.rootPath, adminJsRouter)

const PORT = process.env.port || 3000

app.listen(PORT, ()=>{
  database.authenticate().then(() => {
    console.log('DB connection successfull.')
  })
  console.log(`Server started successfuly at port ${PORT}`)
})