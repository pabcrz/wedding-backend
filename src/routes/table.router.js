const { setTable } = require("../lib/tableController");
const tableUseCase = require("../usecases/table.usecase");
const express = require("express");

const router = express.Router();

// GET /tables
router.get("/", async (request, response) => {
  try {
    const allTables = await tableUseCase.getAll();

    response.json({
      success: true,
      message: "All tables",
      data: {
        tables: allTables,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// POST /tables
router.post("/", async (request, response) => {
  try {
    const newTable = await tableUseCase.create(request.body);

    response.json({
      success: true,
      message: "Table created",
      data: {
        table: newTable,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// GET /tables/:id
router.get("/:id", async (request, response) => {
  try {
    const table = await tableUseCase.getById(request.params.id);

    response.json({
      success: true,
      message: "Table found",
      data: {
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
});

// DELETE /tables/:id
router.delete("/:id", async (request, response) => {
  try {
    const deletedTable = await tableUseCase.deleteById(request.params.id);

    response.json({
      success: true,
      message: "Table deleted",
      data: {
        table: deletedTable,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// PATCH /tables/:id
router.patch("/:id", async (request, response) => {
  try {
    const updatedTable = await tableUseCase.updateById(
      request.params.id,
      request.body
    );

    response.json({
      success: true,
      message: "Table updated",
      data: {
        table: updatedTable,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

// POST /tables/assign-guests
// Assign a guest to a table
router.post("/set-guest", async (request, response) => {
  await setTable(request, response);
});

module.exports = router;
