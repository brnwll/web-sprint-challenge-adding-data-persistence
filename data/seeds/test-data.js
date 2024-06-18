exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("projects").truncate();
  await knex("resources").truncate();
  await knex("tasks").truncate();
  await knex("project_resources").truncate();
  await knex("projects").insert([
    { project_name: "project1", project_description: "project1 description" },
    { project_name: "project2", project_description: "project2 description" },
    { project_name: "project3", project_description: "project3 description" },
  ]);
  await knex("resources").insert([
    {
      resource_name: "resource1",
      resource_description: "resource1 description",
    },
    {
      resource_name: "resource2",
      resource_description: "resource2 description",
    },
    {
      resource_name: "resource3",
      resource_description: "resource3 description",
    },
  ]);
  await knex("tasks").insert([
    { task_description: "task1", task_notes: "task1 notes", project_id: 1 },
    { task_description: "task2", task_notes: "task2 notes", project_id: 1 },
    { task_description: "task3", task_notes: "task3 notes", project_id: 2 },
  ]);
  await knex("project_resources").insert([
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 2 },
    { project_id: 2, resource_id: 2 },
  ]);
};
