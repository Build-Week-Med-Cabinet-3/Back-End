exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recommendations")
    .truncate()
    .then(function() {
      const recommendations = [
        {
          strain: "Fruity-Pebbles",
          type: "Hybrid",
          flavor: "Lorem ipsum",
          effects: "Happy, Relaxed, Uplifted, Euphoric, Giggle",
          description:
            "Fruity Pebbles (aka Fruity Pebbles OG) by Alien Genetics was a limited-time offering from the breeder. This sweet hybrid takes genetics from Green Ribbon, Granddaddy Purple, and Tahoe Alien to create a tropical berry flavor reminiscent of the cereal. The euphoric effects will keep you happy when you're stressed and help you catch some sleep when faced with insomnia. Sit back, relax, and pour yourself a bowl of Fruity Pebbles!",
          userId: 1
        },
        {
          strain: "Blue Dream",
          type: "Hybrid",
          flavor: "Lorem ipsum",
          effects: "Happy, Relaxed, Uplifted, Euphoric, Creative",
          description:
            "Blue Dream, a sativa-dominant hybrid originating in California, has achieved legendary status among West Coast strains. Crossing Blueberry with Haze, Blue Dream balances full-body relaxation with gentle cerebral invigoration. Novice and veteran consumers alike enjoy the level effects of Blue Dream, which ease you gently into a calm euphoria. ",
          userId: 1
        },
        {
          strain: "Fruity-Pebbles",
          type: "Hybrid",
          flavor: "Lorem ipsum",
          effects: "Happy, Relaxed, Uplifted, Euphoric, Giggle",
          description:
            "Fruity Pebbles (aka Fruity Pebbles OG) by Alien Genetics was a limited-time offering from the breeder. This sweet hybrid takes genetics from Green Ribbon, Granddaddy Purple, and Tahoe Alien to create a tropical berry flavor reminiscent of the cereal. The euphoric effects will keep you happy when you're stressed and help you catch some sleep when faced with insomnia. Sit back, relax, and pour yourself a bowl of Fruity Pebbles!",
          userId: 2
        }
      ];
      // Inserts seed entries
      return knex("recommendations").insert(recommendations);
    });
};
