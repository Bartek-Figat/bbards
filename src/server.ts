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
server.use(express.urlencoded({ limit: '10mb', extended: true }));
server.use(express.json({ limit: '10mb' }));
server.use(compression());
server.use(
  cors({
    origin: 'http://bbards.com/',
    credentials: true,
  })
);
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
