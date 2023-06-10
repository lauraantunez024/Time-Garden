const express = require('express')
const cors = require('cors');
const app = express();
const port = 3000;


const requestTime = function(req, res, next) {
  req.requestTime = new Date
  next()
}


app.use(cors())
app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(port, () => {
  console.log(`This app is running on port ${port}`)
})