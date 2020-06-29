
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table)=>{
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description")
        table.boolean("compleated").defaultTo("false")
    })

    await knex.schema.createTable("resources", (table)=>{
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description")
    })

    await knex.schema.createTable("tasks", (table)=>{
        table.increments("id")
        table.text("description").notNull().unique()
        table.integer("step_number")
        table.text("notes")
        table.integer("project_id").references("id").inTable("projects")
    })

    await knex.schema.createTable("projects_resources", (table)=>{
        table.integer("project_id").references("id").inTable("projects")
        table.integer("resource_id").references("id").inTable("resources")
        table.primary(["project_id", "resource_id"])
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
  
};
