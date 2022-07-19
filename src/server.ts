import { config } from 'dotenv';
import express, { Express } from 'express';
import helemt from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import process from 'process';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import router from './routes/user.routes';
import cors from 'cors';

config();

const Port = 8080;

process.on('SIGINT', (err) => {
  process.exit(0);
});
const server: Express = express();
server.use(express.urlencoded({ limit: '50mb', extended: true }));
server.use(express.json({ limit: '50mb' }));
server.use(compression());
server.use(
  cors({
    methods: ['GET, POST, PUT, DELETE, OPTIONS'],
    credentials: true,
    origin: '*',
    allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization'],
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
