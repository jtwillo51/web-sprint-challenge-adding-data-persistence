
exports.seed = async function(knex) {
  await knex("resources").insert([
    {
      name: "hammer"
    },
    {
      name: "saw",
      description: "for cutting"
    },
    {
      name: "computer", 
      description: "for gaming"
    }
  ])
};
