const express = require('express');
const app = express();
const PORT = 5000;

// Define a simple Hello World route
app.get('/', (req, res) => {
    res.send('Hello World from the Node.js back end!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});