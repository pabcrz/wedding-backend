const mongoose = require("mongoose");

const modelName = "guest";

const schema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  familia: {
    type: String,
    required: true,
  },
  asistencia: {
    type: Boolean,
    required: false,
  },
  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "table",
  },
});

module.exports = mongoose.model(modelName, schema);
