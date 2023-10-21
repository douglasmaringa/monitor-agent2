const axios = require("axios");

// Function to perform website availability test with retry
async function performWebsiteAvailabilityTest(url, retries = 1) {
  let attempt = 0;
  
  while (attempt <= retries) {
    try {
      const response = await axios.get(url);
      console.log(response)

      if (response.status === 200) {
        return {
          result: "Up",
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          // Add other relevant properties here
        };
      } else {
        return {
          result: "Down",
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          // Add other relevant properties here
        };
      }
      
    } catch (error) {
      console.error("Error performing website availability test:", error);
      attempt++;
    }
  }
  
  return "Down"; // Website is down after retries
}

module.exports = {
  performWebsiteAvailabilityTest
};
