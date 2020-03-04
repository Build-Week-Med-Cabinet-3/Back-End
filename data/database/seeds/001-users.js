exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      const users = [
        {
          username: "SeedSmith",
          password:
            "$2a$08$fB5pE5Iov0bMA8H7PhJZWe.HCO2IpN7isYLEowR8U.O5JdlySr9IS",
          email: "seed@tree.com",
          medicinalUse: true,
          tolerance: 2,
          medicalConditions: "Terrible back pain and existential dread",
          desiredEffect: "I want to enjoy life again"
        },
        {
          username: "SeedJones",
          password:
            "$2a$08$tjaW0n3amCgwyKPkQmrtpeWeqH1140xV.UUC.a9YBcq9luU3OyUHO",
          email: "JseedYO@tree.com",
          medicinalUse: false,
          tolerance: 4,
          medicalConditions: "Yo dawg I can't feel my legs!",
          desiredEffect: "Stand up"
        },
        {
          username: "SeedMalone",
          password:
            "$2a$08$nwcHvy3/0/REvTqWPsH9P.ZSRrjrkXT5canEyDlzIKh8yFGB1R5y6",
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
