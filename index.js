const express = require('express');
const path = require('path');
const port = 8000;
const app = express();




app.set('view engine', 'ejs');
app.set('views',  path.join(__dirname,  'views'));
app.use(express.urlencoded());
app.use("/assets",express.static('./assets'));



let contactList = [
    {
        name:"Chetan",
        phone: "1234567890"
    },
    {
        name:"Raj",
        phone:" 1234567891"
    },
    {
        name:"Shubham",
        phone: "1234567892"
    }
]


app.get('/', function(req,res){
    return  res.render('index',{
        title: "Hello World | Contact List",
        contact_list : contactList
    });
});

app.get('/profile',function(req,res){
    return res.render('profile');
})

app.post('/create-contact', function(req,res){
    console.log(req.body);
    contactList.push({
        name: req.body.name,
        phone: req.body.phone
    })
    return res.redirect('back');
})


app.listen(port, function(error){
    if(error){
        return console.log('Error in running server on port Number', port);
    }
    console.log("Server is running fine on port Number", port);
});