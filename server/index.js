require('dotenv').config({ path: 'server/.env' })

const express = require('express')
const cors = require('cors')
const app = express()

const path = require('path')
const router = express.Router()

app.use(express.json({ limit: '5mb' }))
app.use(express.static('client/public'))
app.use(cors())

app.use('/', router.get('*', (req, res) => {
  res.sendFile(path.resolve('client/public', 'index.html'))
}))

app.listen(process.env.PORT || 8181, () => {
  console.log('Server is listening.')
})
