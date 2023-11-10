var express = require('express');
var router = express.Router();
var db=require("../models");
var SpeciesService = require("../service/speciesService"); 
var speciesService = new SpeciesService(db);

router.get('/', async function (req, res, next) {
    try {
        const species = await speciesService.getAll();
        
        res.render('species', { user: req.user, species: species });
    } catch (error) {
        console.error("Error fetching animals:", error);
        next(error); 
    }
});

router.post('/update/:id', async function (req,res){
    try{
        await speciesService.updateSpecies(req.params.id,req.body.newSpecies);
        res.json({success:true});
    }catch(error){
        console.error("Error updating species:", error);
        res.json({success:false});
    }
})

router.post('/add', async function (req,res){
    try{
        await speciesService.addSpecies(req.body.species);
        res.redirect('/species');
    }catch(error){
        console.error("Error adding species:", error);
        res.json({success:false});
    }
})

router.delete('/delete/:id', async function (req,res){
    try{
        await speciesService.deleteSpecies(req.params.id);
        res.json({success:true});
    }catch(error){
        console.error("Error deleting species:", error);
        res.json({success:false});
    }
})

module.exports = router;