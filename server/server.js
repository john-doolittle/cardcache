const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const cors = require('cors');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code} and signal: ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });
} else {
  const app = express();
  const PORT = 3001;

  app.use(parser.json());
  app.use(parser.urlencoded({ extended: true }));
  app.use(express.static('../public'));
  app.use(cors());

  app.listen(PORT, () => {
    console.log(`CORS-enabled web server listening on port: ${PORT}`);
  });
}
