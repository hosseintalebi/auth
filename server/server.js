const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()


app.use(express.static(path.join(__dirname, '../', './client/build')))

app.get('/api/', (req, res) => {
  res.send({a: {b: 12}});
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', './client/build/index.html'));
})

const port = process.env.PORT || 5000
app.listen(port);

console.log(`App is running on port ${port}`);
