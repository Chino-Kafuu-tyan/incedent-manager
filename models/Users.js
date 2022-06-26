const { Schema, model } = require("mongoose");
const normalize = require("normalize-mongoose");

const Users = new Schema({
  fullName: { type: String, required: true },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  position: { type: String, required: true },
});

module.exports = model("Users", Users.plugin(normalize));
