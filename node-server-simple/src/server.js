const os = require('os');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log('**********');
    console.log(`${req.method} ${req.originalUrl}`);
    console.log(`Time: ${new Date()}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/pingpong/:ping', (req, res) => {
    res.send({
        message: 'pong!',
        body: {
            ping: req.params.ping,
            platform: os.type(),
            release: os.release(),
            hostName: os.hostname()
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
