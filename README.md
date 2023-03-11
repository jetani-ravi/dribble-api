#### Dribble-API  ####

## Quick Start
Clone the repo:

```bash
git clone --depth 1 https://github.com/jetani-ravi/dribble-api.git
cd dribble-api
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Compiling to JS from TS

```bash
yarn compile
```

Compiling to JS from TS in watch mode

```bash
yarn compile:watch
```

Commiting changes

```bash
yarn commit
```

Testing:

```bash
# run all tests
yarn test

# run TypeScript tests
yarn test:ts

# run JS tests
yarn test:js

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

## Making Changes

Run `yarn dev` so you can compile Typescript(.ts) files in watch mode

```bash
yarn dev
```

Add your changes to TypeScript(.ts) files which are in the src folder. The files will be automatically compiled to JS if you are in watch mode.

Add tests for the new feature

Run `yarn test:ts` to make sure all Typescript tests pass.

```bash
yarn test:ts
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3001

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/dribble_db

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=30

# URL of client application
CLIENT_URL=http://localhost:9000
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3001/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.
