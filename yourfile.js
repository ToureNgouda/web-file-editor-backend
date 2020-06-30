var express = require('express');
var compression = require('compression');
const bodyParser = require('body-parser');
var fs = require('fs');
var open = require('open')
var httpProxy = require('http-proxy');
var API_HOST = process.env.API_HOST || 'localhost:3001'
var PORT = process.env.SERVER_PORT || '3000';
var open = require('open');

var appfront = express();
var apiProxy = httpProxy.createProxyServer();
appfront.use(express.static('build'));

appfront.use(compression());

appfront.all('/api/*', function (req, res) {
  apiProxy.web(req, res, { target: 'http://' + API_HOST })
});
appfront.get('*', function (req, res) {
    res.sendfile("/build/index.html");
  });
  appfront.listen(PORT, () =>
  console.log('application running on localhost:' + PORT)
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const name = "yourfile.js";
app.get('/api/getcontentfile', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  fs.readFile(__dirname + "/" + name, 'utf8', (err, data) => {
    //    console.log( data );
    if (err) console.log(err);
    res.send(JSON.stringify({
      name: name,
      content: data,
    }));
  });

});

app.post('/api/savefile', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const data = JSON.stringify(req.body);
  fs.writeFile(name, data, (err) => {
    if (err) console.log(err);
    res.send({
      message: " succefful update file"
    })
  })

});
PORTback = '3001';
app.listen(PORTback, () =>
  console.log('Express server is running on localhost:' + PORTback)
);
open('http://localhost:3000')