require('dotenv').config();

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/testDB.db3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  testing: {
    client: "pg",
    useNullAsDefault: true,
    connection: `postgres://${process.env.DB_PRODUCTION_USER}:${process.env.DB_PRODUCTION_PW}@${process.env.DB_PRODUCTION_HOST}:${process.env.DB_PRODUCTION_PORT}/${process.env.DATABASE_TESTING}`,

    pool: {
      min: 0,
      max: 7
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: "pg",
    useNullAsDefault: true,
    connection: `postgres://${process.env.DB_PRODUCTION_USER}:${process.env.DB_PRODUCTION_PW}@${process.env.DB_PRODUCTION_HOST}:${process.env.DB_PRODUCTION_PORT}/${process.env.DATABASE_PRODUCTION}`,

    pool: {
      min: 0,
      max: 7
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
