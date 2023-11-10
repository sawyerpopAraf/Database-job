var express = require('express');
var router = express.Router();
var db=require("../models");
var AdoptionService = require("../service/adoptionService") 
var adoptionService = new AdoptionService(db);

router.get('/', async function (req, res, next) {
    try {
        const adoptionDetails = await adoptionService.getAdoptionDetails();
        
        res.json(adoptionDetails);
    } catch (error) {
        console.error("Error fetching animals:", error);
        next(error); 
    }
});


module.exports = router;