const express = require("express");
const cors = require("cors"); // Import cors middleware
const formRoutes = require("./formRoute");
const dbConnect = require("./database");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
dbConnect();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for requests from your frontend
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
    credentials: true, // Allow cookies if necessary
  })
);

// API Routes
app.use("/api/v1", formRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});
