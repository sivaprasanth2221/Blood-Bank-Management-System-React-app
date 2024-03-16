var Express = require("express");
var Mongoclient = require("mongodb").MongoClient; // Corrected the import
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb://localhost:27017";
var DATABASE_NAME = "Bloodbank"; // Changed to uppercase for consistency
var database;

app.listen(5038, ()=>{
    Mongoclient.connect(CONNECTION_STRING, (error, client) =>{
    database=client.db(DATABASE_NAME);
    console.log("Mongo DB Connection Successful");
    });
})

app.get('/api/Bloodbank/GetHospital',(request,response)=>{
  database.collection("Hospital").find({id:"1"}).toArray((error,result)=>{
      response.send(result);
  });
})


app.post('/api/Bloodbank/AddHospital',multer().none(),(request,response)=>{
    database.collection("Hospital").count({}, function(error, numofDocs){
    database.collection("Hospital").insertOne({
    id:(numofDocs+1).toString(),
    hospital_name:request.body.newHospital,
    Address:request.body.newAddress
        });
    response.json("Added Succesfully");
    })
})


app.delete('/api/Bloodbank/DeleteHospital',(request, response) =>{
    database.collection("Hospital").deleteOne({
    id:request.query.id
    });
    response.json("Deleted Successfully");
})