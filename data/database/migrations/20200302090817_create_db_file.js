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

      users
        .string("email", 128)
        .index()
        .unique();

      users.boolean("medicinalUse").index();

      users
        .integer("tolerance")
        .index()
        .notNullable();

      users.string("medicalConditions", 512).index();

      users
        .string("desiredEffect", 1024)
        .index()
        .notNullable();
    })
    .createTable("recommendations", recs => {
      recs.increments(); // id column, integer, primary key, auto-increment

      recs
        .string("Strain", 128)
        .index()
        .notNullable();

      recs
        .string("Type", 128)
        .index()
        .notNullable();

      recs.string("Flavor", 128).index();

      recs.string("Effects", 128).index();

      recs
        .string("Description", 2048)
        .index()
        .notNullable();

      recs
        .integer("UserId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("favorites", favs => {
      favs.increments();

      favs
        .string("Strain", 128)
        .index()
        .notNullable();

      favs
        .string("Type", 128)
        .index()
        .notNullable();

      favs.string("Flavor", 128).index();

      favs.string("Effects", 128).index();

      favs
        .string("Description", 2048)
        .index()
        .notNullable();

      favs
        .integer("UserId")
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
    .dropTableIfExists("favorites")
    .dropTableIfExists("recommendations")
    .dropTableIfExists("users");
};
