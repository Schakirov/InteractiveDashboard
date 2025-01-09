const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/data', (req, res) => {
    res.json({ message: "Welcome to the API", data: {} });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});