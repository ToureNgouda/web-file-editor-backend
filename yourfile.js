var express = require('express');
var compression = require('compression');
const bodyParser = require('body-parser');
var fs = require('fs');
var open = require('open')
var httpProxy = require('http-proxy');
var open = require('open');
var API_HOST = process.env.API_HOST || 'localhost:3001'
var PORT = process.env.SERVER_PORT || '3000';
var PORT_API = process.env.SERVER_PORT || '3001';

var appfront = express();
// create serveur proxy
var apiProxy = httpProxy.createProxyServer();
// Serve static resources from 'build' folder
appfront.use(express.static('client-react/build'));
// Enable gzip response compression
appfront.use(compression());
// Proxy all the api requests
appfront.all('/api/*', function (req, res) {
    apiProxy.web(req, res, { target: 'http://' + API_HOST })
});
// Otherwise serve index.html
appfront.get('*', function (req, res) {
    res.sendfile("client-react/build/index.html");
});
appfront.listen(PORT);
var  app = express();
//configure body-parser for express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const name = "yourfile.js";
// api for get name file and content file
app.get('/api/getcontentfile', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    fs.readFile(__dirname + "/" + name, 'utf8', (err, data) => {
        if (err) console.log(err);
        res.send({
            name: name,
            content: data,
        });
    });

});

// api for save file after update 
app.post('/api/savefile', (req, res) => {
     res.setHeader('Content-Type', 'application/json');
    var namefile = req.body.name;
    var content = req.body.content;
    fs.writeFile(namefile, content,'utf-8', (err) => {
        if (err) throw err;
        res.send({
            name: namefile,
            content: content
        })
    })

});

app.listen(PORT_API, () =>
     console.log('Running on port' + PORT + ' with API_HOST:'+API_HOST)
);
// open the app in localhost:3000
open('http://localhost:3000')