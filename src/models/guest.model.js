const mongoose = require("mongoose");

const modelName = "guest";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  family: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    required: false,
  },
  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "table",
  },
});

module.exports = mongoose.model(modelName, schema);
