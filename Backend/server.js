const express = require('express');
const cors = require('cors');

const showsRoutes = require('./routes/shows');
const episodesRoutes = require('./routes/episodes.js');

const app = express();
app.use(cors());

const port = 3000;

// Routes
app.use('/search', showsRoutes);
app.use('/episodes', episodesRoutes);



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});