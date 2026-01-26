const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

//  Test route for localhost
app.get("/", (req, res) => {
  res.send(" TCN24 Backend is running on localhost!");
});

// API routes
app.use("/api", require("./routes/youtubeRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, http://localhost:${PORT}`);
});
