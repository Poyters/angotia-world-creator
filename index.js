const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    console.log('GET REQUEST');
    res.send({name: 'Rafal'});
});

app.listen(process.env.port || 5000, () => {
    console.log('Backend server now listening at port 5000');
})