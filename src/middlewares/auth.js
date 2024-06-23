const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const adminUseCase = require("../usecases/admin.usecase");

async function auth(request, response, next) {
  try {
    const token = request.headers.authorization;

    if (!token) {
      throw createError(401, "Token required");
    }

    const payload = jwt.verify(token);
    const admin = await adminUseCase.getById(payload.id);

    request.admin = admin;
    next();
  } catch (error) {
    response.status(401);
    response.json({
      success: false,
      error: error.message,
      message: "Unauthorized",
    });
  }
}

module.exports = auth;
