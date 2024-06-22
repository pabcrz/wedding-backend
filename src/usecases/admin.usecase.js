const createError = require("http-errors");
const Admin = require("../models/admin.model");
const encrypt = require("../lib/encrypt");

async function create(adminData) {
  const adminExists = await Admin.findOne({ name: adminData.name });
  if (adminExists) {
    throw new createError(409, "Admin already exists");
  }

  userData.password = await encrypt.encrypt(userData.password);

  const newAdmin = await Admin.create(adminData);
  return newAdmin;
}

async function getAll() {
  const allAdmins = await Admin.find();
  return allAdmins;
}

async function getById(id) {
  const admin = await Admin.findById(id);
  return admin;
}

async function updateById(id, newAdminData) {
  const updated = await Admin.findByIdAndUpdate(id, newAdminData, {
    new: true,
  });
  return updated;
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
};
