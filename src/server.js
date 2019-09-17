import express from 'express';


const app = express()

app.get('/', (req, res) => res.send('Angotia Map creator API'))

app.listen(4500, () => console.log('Now, server is listening on port 4500'))