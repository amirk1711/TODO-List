const mongoose = require('mongoose');

// connect mongoose to our database
mongoose.connect('mongodb://localhost/todo_list_db', { useNewUrlParser: true, useUnifiedTopology: true});

// acquire the connection to verify whether mongoose is connected to our database or not
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error in connecting to db'));
db.once('open', function(){
    console.log("Successfully connected to the database");
});

module.exports = db;