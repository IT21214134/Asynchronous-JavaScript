// Import the axios library
const axios = require('axios');

function fetchData(url, callback) {
    // Make a GET request to the specified URL using axios
    axios.get(url)
        .then(response => {
            // Call the callback function with the response data
            callback(null, response.data);
        })
        .catch(error => {
            // Call the callback function with the error
            callback("Error: " + error.message);
        });
}

// Example usage of the fetchData function with a callback
fetchData('https://jsonplaceholder.typicode.com/posts/1', function (error, data) {
    if (error) {
        // Log the error to the console
        console.error(error);
    } else {
        // Log the response data to the console
        console.log(data);
    }
});
