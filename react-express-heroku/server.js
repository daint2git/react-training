const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'frontend/build')))

app.get('/api/home', (req, res) => res.send('DaiNT2 - Home'))
app.get('/api/about', (req, res) => res.send('DaiNT2 - About'))

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
