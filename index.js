const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const Contact = require('./models/Contact');
const app = express();




app.set('view engine', 'ejs');
app.set('views',  path.join(__dirname,  'views'));
app.use(express.urlencoded());
app.use("/assets",express.static('./assets'));






app.get('/', function(req,res){
    Contact.find({}, function(err, contacts){
        if(err){
            console.log("Error infetching contacts from DB");
            return;
        }else{
            return  res.render('index',{
                title: "Hello World | Contact List",
                contactlist : contacts
            });
        }
    })
    
});

app.get('/profile',function(req,res){
    return res.render('profile');
})

app.post('/create-contact', function(req,res){
    console.log(req.body);
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){console.log("Error in creating contact");
    return}else{console.log("000000000", newContact);
    return res.redirect('back');}
    })
    
})


app.get('/delete-contact/',function(req,res){
    //  get the id from query 
    let id = req.query.id;
    console.log(id);

    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error in deleteing the contact from DB");
        }
        return;
    });
    return res.redirect('back');

})

app.get('/signup', function(req,res){
    return res.render('signUp');
});

app.get('/signin', function(req,res){
    return res.render('signIn');
})

app.listen(port, function(error){
    if(error){
        return console.log('Error in running server on port Number', port);
    }
    console.log("Server is running fine on port Number", port);
});