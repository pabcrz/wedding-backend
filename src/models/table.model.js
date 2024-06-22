const mongoose = require("mongoose");

const modelName = "table";

const schema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  guests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "guest",
    },
  ],
});

module.exports = mongoose.model(modelName, schema);
