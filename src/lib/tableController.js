const tableUseCase = require("../usecases/table.usecase");
const guestUseCase = require("../usecases/guest.usecase");

const setTable = async (request, response) => {
  try {
    const { tableId, guestId } = request.body;

    const table = await tableUseCase.getById(tableId);
    const guest = await guestUseCase.getOne(guestId);

    if (!table) {
      return response.status(404).json({
        success: false,
        message: "Table not found",
      });
    } else if (!guest) {
      return response.status(404).json({
        success: false,
        message: "Guest not found",
      });
    }

    // console.log(table.guests);
    // table.guests.forEach((guest) => console.log(guest._id.toString()));

    if (table.guests.length >= 10) {
      return response.status(409).json({
        success: false,
        message: "Table is full",
      });
    }

    if (table.guests.some((guest) => guest._id.toString() === guestId)) {
      return response.status(409).json({
        success: false,
        message: "Guest is already at the table",
      });
    } else {
      guest.table = tableId;
      await guest.save();

      table.guests.push(guestId);
      await table.save();
    }

    response.json({
      success: true,
      message: "Guest added to table",
      data: {
        guest: guest.name + " " + guest.lastName,
        table,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { setTable };
