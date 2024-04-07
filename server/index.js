const express = require("express")
const app = express();
const cors = require("cors")

// Middleware
app.use(cors())
app.use(express.json());

// 5000 used by AirPlay on Mac
app.listen(5001, () => {
  console.log("Server has started on port 5001")
});