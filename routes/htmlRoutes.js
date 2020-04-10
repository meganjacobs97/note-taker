//HTML ROUTES
//dependencies 
const path = require("path"); 
const express = require("express"); 

const router = express.Router(); 

//GET `/notes` - return the `notes.html` file.
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../notes.html"));
});
//GET `/` - return the `index.html` file
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../home.html"));
});

//export routes 
module.exports = router; 