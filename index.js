const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
// const TaskList = require('./models/tasks');

// use for styles and scripts
// app.use(express.static('./assets'));

// setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware for parsing
app.use(express.urlencoded({ extended: true }));

// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
});