const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define a MongoDB schema and model
const todoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean
});
const Todo = mongoose.model('Todo', todoSchema);

// Define API endpoints
app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
