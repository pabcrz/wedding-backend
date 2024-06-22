const createError = require("http-errors");
const Table = require("../models/table.model");

async function create(tableData) {
  const tableNumExists = await Table.findOne({ number: tableData.number });
  if (tableNumExists) {
    throw new createError(409, "Table Number already exists");
  }

  const tableNameExists = await Table.findOne({ name: tableData.name });
  if (tableNameExists) {
    throw new createError(409, "Table Name already exists");
  }

  const newTable = await Table.create(tableData);
  return newTable;
}

async function getAll() {
  const allTables = await Table.find().populate("guests");
  return allTables;
}

async function getById(id) {
  const table = await Table.findById(id).populate("guests");
  return table;
}

async function updateById(id, newTableData) {
  const updatedTable = await Table.findByIdAndUpdate(id, newTableData, {
    new: true,
  });
  return updatedTable;
}

async function deleteById(id) {
  const deletedTable = await Table.findByIdAndDelete(id);
  return deletedTable;
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
