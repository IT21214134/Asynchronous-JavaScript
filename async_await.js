// Import the axios library
const axios = require('axios');

async function fetchDataAsync(url) {
    try {
        // Use the await keyword to wait for the Promise to be resolved or rejected
        const response = await axios.get(url);

        // Log the response data to the console
        console.log(response.data);
    } catch (error) {
        // Log the error to the console
        console.error("Error:", error.message);
    }
}

// Example usage of the fetchDataAsync function
fetchDataAsync('https://jsonplaceholder.typicode.com/posts/1');
