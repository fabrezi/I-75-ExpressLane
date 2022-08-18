const express = require('express');
const app = express(); //app is an instance of express

//format of the command:
//app.method(path, handler)
//handler is the method that is executed when the route is matched

app.get( '/',  (req, res) => {
    res.send('Hola Combrone');
})

app.listen(3000, () => {
    console.log('Server is up and running mate!!')
});

