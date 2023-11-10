var express = require('express');
var router = express.Router();
var db=require("../models");
var AnimalService = require("../service/animalservice"); 
var animalService = new AnimalService(db);
var calculateAge = require("../public/js/calculateage");


router.get('/', async function (req, res, next) {
    try {
        const animals = await animalService.getAll();
        
        res.render('animals', { user: req.user, animals: animals,calculateAge: calculateAge });
    } catch (error) {
        console.error("Error fetching animals:", error);
        next(error); 
    }
});

router.post('/adopt/:animalId', async function(req, res) {
    try {
        await animalService.adoptAnimal(req.params.animalId, req.user.id);
        await animalService.updateAdoptionStatus(req.params.animalId, true);
        res.json({ success: true });
    } catch (error) {
        console.error("Error adopting animal:", error);
        res.json({ success: false });
    }
});

router.delete('/drop/:animalId', async function(req, res) {
    try {
        await animalService.dropAdoption(req.params.animalId)
        res.json({ success: true });
    } catch (error) {
        console.error("Error dropping adoption:", error);
        res.json({ success: false });
    }
});

router.get('/age', async function(req, res) {
    try {
        const animals = await animalService.animalsByAge();
        res.json(animals);
    } catch (error) {
        console.error("Error fetching animals by age:", error);
        res.json({ success: false });
    }
});

router.get('/dateRange', async function(req, res) {
    const dateFrom = req.query.from;
    const dateTo = req.query.to;
    
    try {
        const animals = await animalService.animalsByDateRange(dateFrom, dateTo);
        res.json(animals);
    } catch (error) {
        console.error("Error fetching animals by date range:", error);
        res.json({ success: false });
    }
});

router.get('/size',async function(req,res){
    const size = req.query.size;
    try{
        const animals = await animalService.animalsBySize(size);
        res.json(animals);
    }catch(error){
        console.error("Error fetching animals by size:", error);
        res.json({ success: false });
    }
}









)


module.exports = router;

