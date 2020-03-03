exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      const users = [
        {
          username: "Seed Smith",
          password: "pass",
          email: "seed@tree.com",
          medicinalUse: true,
          tolerance: 2,
          medicalConditions: "Terrible back pain and existential dread",
          desiredEffect: "I want to enjoy life again"
        },
        {
          username: "Seed Jones",
          password: "pass",
          email: "JseedYO@tree.com",
          medicinalUse: false,
          tolerance: 4,
          medicalConditions: "Yo dawg I can't feel my legs!",
          desiredEffect: "Stand up"
        },
        {
          username: "Seed Malone",
          password: "pass",
          email: "stardom@acorn.com",
          medicinalUse: false,
          tolerance: 4,
          medicalConditions: null,
          desiredEffect: "I want to be a real boy!"
        }
      ];
      // Inserts seed entries
      return knex("users").insert(users);
    });
};
