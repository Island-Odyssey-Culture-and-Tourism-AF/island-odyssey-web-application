// app.js

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

// routes
// const places = require("./routes/places"); //use this when implementing routes
const transportationRoutes = require("./routes/transportation");
const pointsRouter = require("./routes/Points");
// const users = require('./routes/users');  //use this when implementing routes

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));


// app.use("/api/places", places); //use this when implementing routes
// app.use('/api/users', users);  //use this when implementing routes

app.use("/transportation", transportationRoutes);
app.use("/api/points", pointsRouter);

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app
  .use(express.static(path.join(__dirname, "/client/build")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
