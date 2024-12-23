const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Import routes
const exerciseRoutes = require("./routes/exerciseRoutes"); // Ensure this file exists and is correctly implemented

// Initialize app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies

// Define routes
app.use("/exercises", exerciseRoutes); // Use exercise-related routes

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server
    const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((error) =>
    console.error("Database connection error:", error.message)
  );
