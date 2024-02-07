// Create web server
const express = require('express')
const app = express()

// Create a POST route that responds to /comments
app.post('/comments', (req, res) => {
  res.send('You have sent a POST request to /comments')
})

// Create a GET route that responds to /comments
app.get('/comments', (req, res) => {
  res.send('You have sent a GET request to /comments')
})

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})