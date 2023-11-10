
const DataService = require('./dataService');

async function populateAllTables() {
    try {
        await DataService.populateFromJson('Temperaments.json');
        await DataService.populateFromJson('species.json');
        await DataService.populateFromJson('animals.json');
        await DataService.populateFromJson('AnimalTemperament.json');
        await DataService.populateFromJson('users.json')
        await DataService.populateFromJson('adoption.json')

        console.log("All tables populated successfully.");
    } catch(err) {
        console.error("Error populating tables:", err);
    }
}

populateAllTables();
