const express = require('express');
const helmet = require('helmet');
const app = express();

const PORT = process.env.PORT || 5500;


app.use(helmet())

app.get("/", (req, res) => {
  res.json("Hello World!")
})

app.listen(PORT, () => {
  console.log('Starting Express server')
})














































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
