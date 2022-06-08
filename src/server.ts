import { config } from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import helemt from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import process from 'process';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { logger, stream } from './utils/logger';
import router from './routes/routes';

config();

const Port = 8080;

process.on('SIGINT', (err) => {
  process.exit(0);
});
const server: Express = express();
server.use(express.urlencoded({ limit: '50mb', extended: true }));
server.use(express.json({ limit: '50mb' }));
server.use(compression());
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
server.use(helemt());
server.use(morgan('tiny'));

server.enable('trust proxy');

const options = {
  swaggerDefinition: {
    info: {
      title: 'REST API',
      version: '1.0.0',
      description: 'Example docs',
    },
  },
  apis: ['swagger.yaml'],
};

const specs = swaggerJSDoc(options);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
server.use('/api/v1', router);

server.listen(Port, () => console.log(`Server is starting cleanup at: http://localhost:${Port}`));
