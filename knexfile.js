// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database/users.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/database/migrations"
    },
    seeds: {
      directory: "./data/database/seeds"
    }
  },

  testing: {
    client: 'pg',
    connection: "postgresql://localhost/med-cabinet-testing",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: "",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: 'knex_migrations'
    }
  }

};
