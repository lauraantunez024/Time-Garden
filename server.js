const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const path = require('path');

main().catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const requestTime = function(req, res, next) {
  req.requestTime = new Date
  next()
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors())
app.use(requestTime)


// eventual routes will go here 

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(port, () => {
  console.log(`This app is running on port ${port}`)
})