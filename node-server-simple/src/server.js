const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/pingpong/:ping', (req, res) => {
    res.send({
        message: 'pong!',
        body: req.params.ping
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
