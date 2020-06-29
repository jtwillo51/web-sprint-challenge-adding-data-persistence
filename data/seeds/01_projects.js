
exports.seed =  async function(knex) {
  await knex("projects").insert([
    {
      name: "replace baseboards"
      
    },
    {
      name: "learn half-flip",
      description: "fastest way to turn around in rocket league"
    }
  ])
};
