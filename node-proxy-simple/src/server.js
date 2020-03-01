const os = require('os');

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const TARGET_PORT = process.env.TARGET_PORT || 4000;

app.use((req, res, next) => {
    console.log('**********');
    console.log(`${req.method} ${req.originalUrl}`);
    console.log(`Time: ${new Date()}`);
    next();
});

app.get('/proxy', (req, res) => {
    res.send({
        message: 'Hello, this is proxy!',
        body: {
            platform: os.type(),
            release: os.release(),
            hostName: os.hostname()
        }
    });
});

app.get('/*', async (req, res) => {
    try {
        const result = await fetch(`http://localhost:${TARGET_PORT}${req.originalUrl}`);
        if (!result.ok) {
            throw new Error('Non-success response code from target');
        }

        let resultBody;
        const isJSON = result.headers.get('content-type').includes('application/json');
        if (isJSON) {
            resultBody = await result.json();
        } else {
            resultBody = await result.text();
        }
        res.send(resultBody);
    } catch (err) {
        console.log(err);
        res.status(502).send({
            message: 'Bad request!'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server listening on port ${PORT}, targeting server at port ${TARGET_PORT}`);
});
