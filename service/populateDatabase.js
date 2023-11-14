
const DataService = require('./dataService');
var db = require("../models");


async function populateAllTables() {
    try {
        const userCount=await db.User.count()
        if(userCount==0){    
            await DataService.populateFromJson('Temperaments.json');
        await DataService.populateFromJson('species.json');
        await DataService.populateFromJson('animals.json');
        await DataService.populateFromJson('AnimalTemperament.json');
        await DataService.populateFromJson('users.json')
        await DataService.populateFromJson('adoption.json')

        console.log("All tables populated successfully.");
    } else {
        console.log("Tables already populated.")
    }
       
    } catch(err) {
        console.error("Error populating tables:", err);
    }
}

module.exports = populateAllTables