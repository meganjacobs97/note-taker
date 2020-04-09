//API ROUTES 
//dependencies 
const path = require("path"); 
const express = require("express"); 
const fs = require("fs"); 
var uniqid = require('uniqid');

const router = express.Router(); 

const dbFilePath = path.join(__dirname,"../db/db.json");


//GET `/api/notes` - read the `db.json` file and return all saved notes as JSON.
router.get("/notes",function(req,res) { 
    console.log("hit get notes api"); 
    fs.readFile(dbFilePath,"utf8",function(error,fileData) {
        if(error) throw error; 
        console.log(fileData); 
        res.json(JSON.parse(fileData)); 
    }); 
}); 

//POST `/api/notes` - receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
router.post("/notes",function(req,res) {
    fs.readFile(dbFilePath,"utf8",function(error,fileData) {
        if(error) throw error; 
        req.body.id = uniqid(); 
        const arr = JSON.parse(fileData); 
        arr.push(req.body); 
        
        fs.writeFile(dbFilePath,JSON.stringify(arr),function(error) {
            if(error) throw error; 
            res.json(req.body); 
        }); 
        
    }); 
    

}); 

//DELETE `/api/notes/:id` - receive a query parameter containing the id of a note to delete
//This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
router.delete("/notes/:id",function(req,res) {
    const id = req.params.id;
    fs.readFile(dbFilePath,"utf8",function(error,fileData) {
        if(error) throw error; 
        req.body.id = uniqid(); 
        const arr = JSON.parse(fileData); 
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].id === id) {
                arr.splice(i,1); 
            }
        }
        fs.writeFile(dbFilePath,JSON.stringify(arr),function(error) {
            if(error) throw error; 
            res.json(req.params.id); 
        }); 
    });
}); 

//export routes 
module.exports = router; 