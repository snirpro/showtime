const express = require('express');
const router = express.Router();

const BaseURL = 'https://api.tvmaze.com';


//function to clean the JSON data we get from the API
function cleanEpisodeResult(result) {
    return {
        id: result.id,
        EpisodeName: result.name,
        numSeason: result.season,
        numEpisode: result.number,
        image: result.image,
        summary: result.summary
    };
}

//function that get the show id as a parameter from the frontend
//send the show id to the API to get the episodes for the shows
//sends back the episodes as a JSON response
router.get('/:id',async (req, res) => {
    const showID = req.params.id;
    const response = await fetch(`${BaseURL}/shows/${showID}/episodes`);
    const data = await response.json();
    const cleanedData = data.map(result => (cleanEpisodeResult(result)));
  res.send(cleanedData);
});

module.exports = router;