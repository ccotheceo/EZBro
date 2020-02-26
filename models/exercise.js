const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  // exercise: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
