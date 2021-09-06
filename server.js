const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Initalize Middleware
app.use(express.json({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000',
}))

// app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/wine", require("./routes/api/wine"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static('client/build'));

  app.get("*", (req, res) => {
    res.sendFire(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
