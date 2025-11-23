const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = 3000;
const TVMazeAPIBaseURL = 'https://api.tvmaze.com';


//a function that get a show name and sends it as a query to the TVmaze API
app.get('/search/shows',async (req, res) => {
    const query = req.query.q;
    const response = await fetch(`${TVMazeAPIBaseURL}/search/shows?q=${query}`);
    const data = await response.json();
    const cleanedData = data.map(result => ({id: result.show.id, ShowName: result.show.name, 
        Generes: result.show.genres,Rating: result.show.rating ,Language: result.show.language,
        Image: result.show.image        
    }));
  res.send(cleanedData);
});

app.get('/episodes/:id',async (req, res) => {
    const showID = req.params.id;
    const response = await fetch(`${TVMazeAPIBaseURL}/shows/${showID}/episodes`);
    const data = await response.json();
    const cleanedData = data.map(result => ({
      id: result.id, EpisodeName: result.name, 
      numSeason: result.season, numEpisode: result.number,
      image: result.image, summary: result.summary
     }));
  res.send(cleanedData);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`example for search use http://localhost:${port}/search/shows?q=girls`);
  console.log(`example for search use http://localhost:${port}/episodes/1`);

});