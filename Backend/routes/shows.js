const express = require('express');
const router = express.Router();

const BaseURL = 'https://api.tvmaze.com';
//function to clean the JSON data we get from the API
function cleanShowResult(result) {
    const show = result.show || {};
    return {
        id: show.id,
        ShowName: show.name,
        Generes: show.genres,
        Rating: show.rating,
        Language: show.language,
        Image: show.image
    };
}

//function that get the show name as a query from the frontend
//send the show name to the API to get shows with a similar name
//sends back the shows as a JSON response
router.get('/shows',async (req, res) => {
    const query = req.query.q;
    const response = await fetch(`${BaseURL}/search/shows?q=${query}`);
    const data = await response.json();

    const cleanedData = data.map(result => cleanShowResult(result));
    res.send(cleanedData);
});
//export the router
module.exports = router;