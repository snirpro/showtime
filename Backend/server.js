const express = require('express');
const app = express();

const port = 3000;
const TVMazeAPIBaseURL = 'https://api.tvmaze.com';


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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`example for search use http://localhost:${port}/search/shows?q=girls`);
});