// const knex = require("knex");

// const knexfile = require("../knexfile.js");

// // this checks to see if there's a specific environment (and therefore database) knex should refer to, otherwise it defaults to development
// const env = process.env.DB_ENV || "development";

// return knex(knexfile[env]);


const knex = require("knex");

const configOptions = require("../knexfile.js").development;

module.exports = knex(configOptions);
