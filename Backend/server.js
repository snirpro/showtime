const express = require('express');
const cors = require('cors');
// Import route handlers
const showsRoutes = require('./routes/shows');
const episodesRoutes = require('./routes/episodes.js');

// Initialize Express app
const app = express();
//CORS Middleware
app.use(cors());

const port = 3000;

// Routes
app.use('/search', showsRoutes);
app.use('/episodes', episodesRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});