const axios = require('axios');

const searchQuery = async (req, res) => {
    const { query } = req.query;

    const apiUrl = 'https://api.spacexdata.com/v3/rockets';
    const value = tryParse(query);

    axios.get(apiUrl)
        .then(response => {
            const jsonData = response.data;
            const result = searchValueAndSubObject(jsonData, value);

            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(404).json({ err: true, msg: 'Nothing Found' });
        });
}

function searchValueAndSubObject(jsonObj, valueToFind, path = '', results = []) {
    for (const key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
            const currentPath = path.length > 0 ? `${path}.${key}` : key;
            const currentValue = jsonObj[key];

            if (currentValue === valueToFind) {

                results.push({ path: currentPath, subObject: jsonObj });
            } else if (typeof currentValue === 'object' && !Array.isArray(currentValue)) {

                searchValueAndSubObject(currentValue, valueToFind, currentPath, results);
            } else if (Array.isArray(currentValue)) {

                currentValue.forEach((item, index) => {
                    searchValueAndSubObject(item, valueToFind, `${currentPath}[${index}]`, results);
                });
            }
        }
    }
    return results;
}



function tryParse(input) {
    const parsedInt = parseInt(input);
    const parsedFloat = parseFloat(input);
    const parsedBool = input.toLowerCase() === "true" || input.toLowerCase() === "false";
    const parsedDate = new Date(input);

    if (!isNaN(parsedInt)) {
        return parsedInt;
    } else if (!isNaN(parsedFloat)) {
        return parsedFloat;
    } else if (parsedBool) {
        return input.toLowerCase() === "true";
    } else if (!isNaN(parsedDate.getTime())) {
        return parsedDate;
    }

    return input;
}



module.exports = { searchQuery };