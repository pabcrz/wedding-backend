const cors = require("cors");
const express = require("express");

const adminRouter = require("./admin.router");
const guestRouter = require("./guest.router");
const tableRouter = require("./table.router");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/admins", adminRouter);
app.use("/guests", guestRouter);
app.use("/tables", tableRouter);

app.get("/", (request, response) => {
  response.json({
    message: "Wedding C&A API",
  });
});

module.exports = app;
