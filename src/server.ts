import { config } from 'dotenv';
import express, { Express } from 'express';
import session from 'express-session';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import process from 'process';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import * as mongoose from "mongoose";

import {connectionString} from "./db/connectionString";
import usersRouter from './users/router'
import adsRouter from './ads/router'


config();

// TODO env
const Port = 8080;

process.on('SIGINT', async (err) => {
  console.log('Closing database connection...');
  await mongoose.disconnect();
  console.log('Connection closed.')
  process.exit(0);
});

//start mongodb
mongoose.connect(connectionString).then(()=>{
  console.log('mongo connection established')
}).catch((err)=>{
  console.error(err);
  process.exit(1);
})

//global configuration for mongoose
mongoose.set("setDefaultsOnInsert", false)

const server: Express = express();
server.use(express.urlencoded({ limit: '50mb', extended: true }));
server.use(express.json({ limit: '50mb' }));
server.use(compression());
server.use(cors({origin: '*'}))
server.use(helmet());
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
server.use('/api/v1/users', usersRouter);
server.use('/api/v1/ads', adsRouter)

server.listen(Port, () => console.log(`Server is starting cleanup at: http://localhost:${Port}`));
