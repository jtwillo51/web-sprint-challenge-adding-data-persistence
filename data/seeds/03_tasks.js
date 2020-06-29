
exports.seed = async function(knex) {
  await knex("tasks").insert([
    {
      description: "pull old baseboard off wall",
      notes: "dont mess up the paint",
      project_id: 1,
      step_number: 1
    },
    {
      description: "cut new board to the neccessary lengths",
      notes: "use saw",
      project_id: 1,
      step_number: 2
    },
    {
      description: "nail new board to wall",
      notes: "use hammer",
      project_id: 1,
      step_number:3
    },
    {
      description: "jump and flip your car upside-down",
      project_id: 2,
      step_number:1
    },
    {
      description: "air-roll so your wheels face the ground",
      notes: "obviously",
      project_id: 2,
      step_number:2
    }

  ])
};
