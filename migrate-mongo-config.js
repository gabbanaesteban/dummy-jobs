/* eslint-disable no-undef */
require('dotenv').config()

const { MONGO_DATABASE_NAME } = process.env

const config = {
  mongodb: {
    url: _getConnectionString(),
    databaseName: MONGO_DATABASE_NAME,
    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },
  migrationsDir: "db/migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js"
};

function _getConnectionString() {
  const host = process.env.MONGO_HOST || 'localhost'
  const port = process.env.MONGO_PORT || '27017'
  const user = process.env.MONGO_USER || ''
  const password = process.env.MONGO_PASSWORD || ''

  if (!user || !password) {
      return `mongodb://${host}:${port}/profiles`
  }

  return `mongodb://${user}:${password}@${host}:${port}/profiles?authSource=admin`
}

// Return the config as a promise
module.exports = config;
