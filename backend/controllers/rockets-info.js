const axios = require('axios');

const getRockets = async (req, res) => {
    const {rocket_id, limit, offset} = req.query;

    let apiUrl = 'https://api.spacexdata.com/v3/rockets';

    if(rocket_id){
        apiUrl += `/${rocket_id}`
    }

    if(limit){
        apiUrl += `?limit=${limit}`;
    }

    if(offset){
        if(limit){
            apiUrl += `&offset=${offset}`
        }
        else{
            apiUrl += `?offset=${offset}`;
        }
    }
    
    axios.get(apiUrl)
        .then(response => {
            return res.status(response.status).json(response.data);
        })
        .catch(error => res.status(404).json({err: true, msg: `No Rocket Found With ID ${rocket_id}`}));
}

module.exports = { getRockets };