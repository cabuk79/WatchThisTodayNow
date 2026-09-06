// Specify the API endpoint
const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=a8a8dd219f02ae2d11809c43d9b85222';

// API key for authentication
const apiKey = 'a8a8dd219f02ae2d11809c43d9b85222';

// Make a GET request with authentication using the Fetch API
fetch(apiUrl, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(protectedData => {
    // Process the protected data
    console.log('Protected Data:', protectedData);
  })
  .catch(error => {
    console.error('Error:', error);
  });