const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Initalize Middleware
app.use(express.json({ extended: false }));
app.use(cors({
  origin: 'http://localhost:1234',
}))

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/wine", require("./routes/api/wine"));

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
