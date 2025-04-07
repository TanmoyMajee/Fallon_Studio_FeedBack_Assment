require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./util/DbConnect');
const { createFeedback, getAllFeedback } = require('./Controller/feedbackController');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/feedback', createFeedback);
app.get('/api/feedback', getAllFeedback);

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 