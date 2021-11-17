'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: '5432',
      user: 'postgres',
      password: 'panda19',
      database: 'cinema'
    },
    migrations: {
      tableName: 'migrationsCinema',
      directory: './migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOSTNAME,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      tableName: 'migrationsCinema',
      directory: './migrations'
    }
  }
};

