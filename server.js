const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const path = require("path");

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express();
const dev = app.get("env") !== "production";

if(!dev) {
  app.disable('x-powered-by')
  app.use(compression())
  app.use(express.static(path.resolve(__dirname, 'build')))

  app.get('*' , (req, res) => {
    res.sendfile(path.resolve(__dirname, 'build', "index.html"))
  })
} 

// if(dev) {
  
// }

const server = createServer(app);

server.listen(PORT, err => {
  if (err ) throw err 
})
