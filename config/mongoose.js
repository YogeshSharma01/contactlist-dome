// require the library
const mongoose = require('mongoose');
// connet the Database

mongoose.connect('mongodb://localhost/contact_List_DB');

// checking the connection (to check if it is successfully connected) 

const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, "error connecting db"));

// up and runnig 

db.once('open', function(){
    console.log("Successfully connected to the DataBase");
})



