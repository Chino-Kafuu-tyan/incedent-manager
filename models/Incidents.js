const { Schema, model } = require("mongoose");
const normalize = require("normalize-mongoose");

const Incidents = new Schema({
  area: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: String, required: true },
  priority: { type: String, required: true },
  startDate: { type: String, required: true },
  status: { type: String, required: true },
  title: { type: String, required: true },
  assignee: { type: String, required: false },
});
module.exports = model("Incidents", Incidents.plugin(normalize));
