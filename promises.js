// Import the axios library
const axios = require('axios');

function fetchData(url) {
    return new Promise((resolve, reject) => {
        // Make a GET request to the specified URL using axios
        axios.get(url)
            .then(response => {
                // Resolve the Promise with the response data
                resolve(response.data);
            })
            .catch(error => {
                // Reject the Promise with an error message
                reject("Error: " + (error.response ? error.response.status : "Network error"));
            });
    });
}

// Example usage of the fetchData function with Promises
fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(responseData => {
        // Log the response data to the console if the Promise is resolved
        console.log(responseData);
    })
    .catch(error => {
        // Log the error to the console if the Promise is rejected
        console.error(error);
    });
