var express = require('express');
 var compression = require('compression');
const bodyParser = require('body-parser');
var fs = require('fs');
var open = require('open')
var httpProxy = require('http-proxy');
var API_HOST = process.env.API_HOST || 'localhost:3000'
var PORT = process.env.SERVER_PORT  ||  '3001';
var open = require('open');

// Initialize
// var app = express();
// var apiProxy = httpProxy.createProxyServer();
// app.use(express.static('build'));

// // Enable gzip response compression
// app.use(compression());

// // Proxy all the api requests
// app.all('/api/*', function (req, res) {
//   apiProxy.web(req, res, { target: 'http://' + API_HOST })
// });
// app.get('*', function (req, res) {
//     res.sendfile("/build/index.html");
//   });


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const name = "yourfile.js";
app.get('/api/getcontentfile', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
   fs.readFile( __dirname + "/" + name, 'utf8', (err, data) =>{
        //    console.log( data );
           if(err) console.log(err);
           res.send(JSON.stringify({
            name:name,   
            content: data,
         }));
        });

});

app.post('/api/savefile', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const data = JSON.stringify(req.body);
     fs.writeFile(name,data,(err)=>{
         if(err) console.log(err);
         res.send({
             message:" succefful update file"
         })
     })
  
  });
app.listen(PORT, () =>
  console.log('Express server is running on localhost:'+PORT)
);
// open('http://localhost:3000')