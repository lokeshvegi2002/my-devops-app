const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from DevOps CI/CD Pipeline v2! see you again'));
app.listen(3000, () => console.log('App running on port 3000'));
