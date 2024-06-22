const createError = require("http-errors");
const Guest = require("../models/guest.model");

async function create(guestData) {
  const guestExists = await Guest.findOne({ name: guestData.name });
  if (guestExists) {
    throw new createError(409, "Guest already exists");
  }

  const newGuest = await Guest.create(guestData);
  return newGuest;
}

async function getAll() {
  const allGuests = await Guest.find().populate("table");
  return allGuests;
}

async function getOne(id) {
  const guest = await Guest.findById(id).populate("table");
  return guest;
}

async function updateById(id, newGuestData) {
  const updatedGuest = await Guest.findByIdAndUpdate(id, newGuestData, {
    new: true,
  });
  return updatedGuest;
}

async function deleteById(id) {
  const deletedGuest = await Guest.findByIdAndDelete(id);
  return deletedGuest;
}

module.exports = {
  create,
  getAll,
  getOne,
  updateById,
  deleteById,
};
