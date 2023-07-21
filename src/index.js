const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const songRoutes = require("./routes/songRoutes.routes"); // Ubah impor di sini

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use(songRoutes); // Gunakan songRoutes.js

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
