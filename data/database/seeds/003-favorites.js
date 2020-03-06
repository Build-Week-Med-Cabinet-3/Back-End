exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("favorites")
    .truncate()
    .then(function() {
      const favorites = [
        {
          strain: "Blue Dream",
          type: "Hybrid",
          flavor: "Lorem ipsum",
          effects: "Happy, Relaxed, Uplifted, Euphoric, Creative",
          description:
            "Blue Dream, a sativa-dominant hybrid originating in California, has achieved legendary status among West Coast strains. Crossing Blueberry with Haze, Blue Dream balances full-body relaxation with gentle cerebral invigoration. Novice and veteran consumers alike enjoy the level effects of Blue Dream, which ease you gently into a calm euphoria. ",
          userId: 1
        }
      ];
      // Inserts seed entries
      return knex("favorites").insert(favorites);
    });
};
