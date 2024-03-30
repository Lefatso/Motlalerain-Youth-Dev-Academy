const express = require('express');
const bodyParser = require('body-parser');
const fetch = import('node-fetch').then(module => module.default);


const app = express();
const PORT = process.env.PORT ||  5500;//3000; // Choose any available port

app.use(bodyParser.json());

app.post('/proxy', async (req, res) => {
    try {
        const { url, data } = req.body;
        
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const responseData = await response.json();
        res.json(responseData);
    } catch (error) {
        console.error('Proxy Error:', error);
        res.status(500).json({ error: 'Proxy Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
