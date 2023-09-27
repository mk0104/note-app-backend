// Import necessary modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3004; // Use the default port 3000, or use an environment variable if available
const fs = require('fs');

// Middleware to parse JSON
app.use(express.json());

// Define a sample route
app.get('/notes', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Error reading data file' });
        } else {
          const jsonData = JSON.parse(data);
          res.json(jsonData);
        }
      });

});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

