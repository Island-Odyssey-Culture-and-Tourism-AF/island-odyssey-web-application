const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

// routes
const transportationRoutes = require("./routes/transportation");
//const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.use("/transportation", transportationRoutes);
//app.use("/auth", authRoutes);
app.use("/blog", blogRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
