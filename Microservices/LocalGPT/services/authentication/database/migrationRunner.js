const { migrate } = require("postgres-migrations")

async function runMigrations() {
  const dbConfig = {
    database: "auth",
    user: "postgres",
    password: "postgres",
    host: "postgres",
    port: 5432,

    // Default: false for backwards-compatibility
    // This might change!
    ensureDatabaseExists: true,

    // Default: "postgres"
    // Used when checking/creating "database-name"
    defaultDatabase: "postgres"
  }

  await migrate(dbConfig, "./database/migrations")
}

module.exports = {
  runMigrations
}