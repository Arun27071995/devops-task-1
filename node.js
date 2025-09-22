const express = require('express');
const app = express();
const port = 4000; // Changed port

app.get('/', (req, res) => {
  res.send('Hello, CI/CD World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
