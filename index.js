const express = require('express');
const app = express(); //app is an instance of express
//each programmar starts off as a video gamer. that is the 
//fundamental. Games are fundamental to creativty and thinking.
//game allows one to see how the code works.

//format of the command:
//app.method(path, handler)
//handler is the method that is executed when the route is matched

app.get( '/',  (req, res) => {
    res.send('Hola Combrone');
})

//process is a NodeJS
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is up and running at port: ${PORT}`);
});



