const express = require('express');
const app = express();

app.get( '/', function (req, res) {
    res.send('Hola Combrone');
})

app.listen(3000, () => {
    console.log('Server is up and running mate!!')
});