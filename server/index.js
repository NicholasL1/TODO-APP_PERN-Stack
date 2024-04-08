const express = require("express")
const app = express();
const cors = require("cors")
const pool = require("./db")

// Middleware
app.use(cors())
app.use(express.json()); //req.body

//ROUTES//

// Create todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *", 
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
})

// Get all todos

// Get a todo

//Update a todo

//Delete a todo

// 5000 used by AirPlay on Mac
app.listen(5001, () => {
  console.log("Server has started on port 5001")
});