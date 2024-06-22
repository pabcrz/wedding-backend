const guestUseCase = require("../usecases/guest.usecase");
const express = require("express");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const allGuests = await guestUseCase.getAll();

    response.json({
      success: true,
      message: "All guests",
      data: {
        guests: allGuests,
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

router.post("/", async (request, response) => {
  try {
    const newGuest = await guestUseCase.create(request.body);

    response.json({
      success: true,
      message: "Guest created",
      data: {
        guest: newGuest,
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

router.get("/:id", async (request, response) => {
  try {
    const guest = await guestUseCase.getOne(request.params.id);

    response.json({
      success: true,
      message: "Guest found",
      data: {
        guest,
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

router.delete("/:id", async (request, response) => {
  try {
    const deletedGuest = await guestUseCase.deleteById(request.params.id);

    response.json({
      success: true,
      message: "Guest deleted",
      data: {
        guest: deletedGuest,
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

router.patch("/:id", async (request, response) => {
  try {
    const updatedGuest = await guestUseCase.updateById(
      request.params.id,
      request.body
    );

    response.json({
      success: true,
      message: "Guest updated",
      data: {
        guest: updatedGuest,
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

module.exports = router;
