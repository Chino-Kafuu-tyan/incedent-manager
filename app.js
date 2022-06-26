require('dotenv').config();
const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const corsMiddleware = require("./middleware/cors.middleware");
const { authRouter, incidentsRouter, usersRouter } = require("./index");
const path = require("path");


const app = express();

app.use(corsMiddleware);
app.use(express.json({ extended: true }));
app.use("/api/auth", authRouter);
app.use("/api/incidents", incidentsRouter);
app.use("/api/users", usersRouter);

const PORT = process.env.PORT;

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const start = async () => {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log("Server Error", e.massage);
    process.exit(1);
  }
};

start();
