// Create web server
// 1. Import express
const express = require('express');
// 2. Create web server
const app = express();
// 3. Set port
const port = 3000;
// 4. Set route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 5. Start web server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// 6. Test: http://localhost:3000