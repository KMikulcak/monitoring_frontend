const express = require('express');
const path = require('path');

let PORT =3000;

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}
const app = express();


app.use(express.static('_app'));



app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'../_app/index.html'));
});


app.listen(PORT, () => {
    console.log('initalized server in port', PORT);
});

