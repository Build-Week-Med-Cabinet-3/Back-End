exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments(); // id column, integer, primary key, auto-increment

      users
        .string("username", 128)
        .index()
        .notNullable()
        .unique();

      users.string("password", 128).notNullable();

      users.string("email", 128).index().unique();

      users.boolean("medicinalUse").index();

      users.integer("tolerance").index();

      users.string("medicalConditions", 512).index();

      users.string("desiredEffect", 1024).index();
    })
    .createTable("recommendations", recs => {
      recs.increments(); // id column, integer, primary key, auto-increment

      recs
        .string("strain", 128)
        .index()
        .notNullable();

      recs
        .string("type", 128)
        .index()
        .notNullable();

      recs.string("flavor", 128).index();

      recs
        .string("description", 2048)
        .index()
        .notNullable();

      recs
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recommendations")
    .dropTableIfExists("users");
};
