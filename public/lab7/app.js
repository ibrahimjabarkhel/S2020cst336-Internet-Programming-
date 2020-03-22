const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); //folder for images, css, js

const request = require('request');

//routes
app.get("/", async function(req, res){
    
 let parsedData = await getImages("lions");
 
 console.dir("parsedData: " + parsedData); //displays content of the object
 
  res.render("results", {"images":parsedData, "orientation" : "vertical"});
            
}); //root route


app.get("/results", async function(req, res){
    
    //console.dir(req);
    let keyword = req.query.keyword; //gets the value that the user typed in the form using the GET method
    let orientation = req.query.verticalHorizontal; // gets the orientation that the user wants to give
    let parsedData = await getImages(keyword);


    if (parsedData.total >= 4){
        res.render("results", {"images":parsedData , "orientation" : orientation});
    }else{
        res.render("index", {"noImages" : "Unfortunately, There is no four images for this term! Try different term"});
    }
    
    
});//results route


//Returns all data from the Pixabay API as JSON format
function getImages(keyword){
    
    
    return new Promise( function(resolve, reject){
        request('https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q='+keyword,
                 function (error, response, body) {
    
            if (!error && response.statusCode == 200  ) { //no issues in the request
                
                 let parsedData = JSON.parse(body); //converts string to JSON
                 
                 resolve(parsedData);
                
                //let randomIndex = Math.floor(Math.random() * parsedData.hits.length);
                //res.send(`<img src='${parsedData.hits[randomIndex].largeImageURL}'>`);
                //res.render("index", {"image":parsedData.hits[randomIndex].largeImageURL});
                
            } else {
                reject(error);
                console.log(response.statusCode);
                console.log(error);
            }
    
          });//request
   
    });
    
}



//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});