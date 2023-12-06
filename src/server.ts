import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import { database } from './database'
import { adminJsRouter, adminjs } from './adminjs'
import { router } from './router'

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(adminjs.options.rootPath, adminJsRouter)
app.use(express.json())
const PORT = process.env.port || 3000

app.use(router)

app.listen(PORT, ()=>{
  database.authenticate().then(() => {
    console.log('DB connection successfull.')
  })
  console.log(`Server started successfuly at port ${PORT}`)
})