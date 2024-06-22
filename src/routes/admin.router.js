const adminUseCase = require("../usecases/admin.usecase");
const express = require("express");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const allAdmins = await adminUseCase.getAll();

    response.json({
      success: true,
      message: "All admins",
      data: {
        admins: allAdmins,
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
    const newAdmin = await adminUseCase.create(request.body);

    response.json({
      success: true,
      message: "Admin created",
      data: {
        admin: newAdmin,
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
