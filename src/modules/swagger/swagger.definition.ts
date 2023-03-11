import config from '../../config/config';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'dribble API documentation',
    version: '0.0.1',
    description: 'This is a dribble-portal API built on node express mongoose',
    license: {
      name: 'MIT',

    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
      description: 'Development Server',
    },
  ],
};

export default swaggerDefinition;
