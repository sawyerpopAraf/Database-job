// services/dataService.js

const fs = require('fs');
const path = require('path');
const db = require('../models/index');

class DataService {
    static async populateFromJson(filename) {
        const filepath = path.join(__dirname, `../public/json/${filename}`);
        let queries = [];
        
        try {
            const rawData = fs.readFileSync(filepath);
            queries = JSON.parse(rawData);
            console.log(`Success reading ${filename}`);
        } catch(err) {  
            console.error(`Error reading ${filename}:`, err);
            return;
        }

        // Use sequelize.query() to populate the database
        for (const entry of queries) {
            await db.sequelize.query(entry.query).catch(err => {
                console.error(`Error executing query from ${filename}, ID: ${entry.id}`, err);
            });
        }
    }
}

module.exports = DataService;
