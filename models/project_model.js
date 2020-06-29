const db = require("../data/config");

function getProjects() {
  return db("projects");
}
function addProject(project) {
  db("project").insert(project);
  return project;
}

function getResources() {
  return db("resources");
}

function addResource(resource) {
  db("resources").insert(resource);
  return resource;
}

function getTasks(id) {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .where("p.id", id)
    .select("*")
    .orderBy("t.step_number");
}

function addTask(task) {
  db("tasks").insert(task);
  return task;
}

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  getTasks,
  addTask,
};
