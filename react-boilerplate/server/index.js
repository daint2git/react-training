const path = require('path')

const express = require('express')
const compression = require('compression')

const app = express()
const port = process.env.PORT || 3000
const outputPath = path.resolve(process.cwd(), 'build')

// compression middleware compresses your server responses which makes them
// smaller (applies also to assets). You can read more about that technique
// and other good practices on official Express.js docs http://mxs.is/googmy
app.use(compression())

// Serve static files from the React frontend app
app.use(express.static(outputPath))

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url += '.gz'
  res.set('Content-Encoding', 'gzip')
  res.set('Content-Type', 'text/javascript')
  next()
})

app.get('*.css', (req, res, next) => {
  req.url += '.gz'
  res.set('Content-Encoding', 'gzip')
  res.set('Content-Type', 'text/css')
  next()
})

app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')))

app.listen(port, () => console.log(`Server listening on port ${port}`)) // eslint-disable-line
