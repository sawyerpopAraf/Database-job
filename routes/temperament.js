var express = require('express');
var router = express.Router();
var db=require("../models");
var TemperamentService = require("../service/temperamentService"); 
var temperamentService = new TemperamentService(db);



router.get('/', async function (req, res, next) {
    try{
         const temperaments = await temperamentService.getAll();
         res.render('temperament', { user: req.user, temperaments: temperaments });
    }
    catch(error){
        console.error("Error fetching temperaments:", error);
        next(error);
    }
    
})

router.post('/update/:id', async function (req,res,next){
    try{
        await temperamentService.updateTemp(req.params.id,req.body.temp);
        res.json({success:true});
    }
    catch(error){
        console.error("Error updating temperaments:", error);
        next(error);
    }
})

router.post('/add', async function (req,res,next){
    try{
        await temperamentService.addTemp(req.body.temp);
        res.redirect('/temperament');
    }
    catch(error){
        console.error("Error adding temperaments:", error);
        next(error);
    }
})

router.delete('/delete/:id', async function (req,res){
    try{
        await temperamentService.deleteTemperament(req.params.id);
        res.json({success:true});
    }
    catch(error){
        console.error("Error deleting temperaments:", error);
        res.json({success:false});
    }
})


module.exports = router;