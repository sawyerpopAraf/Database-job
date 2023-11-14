const fs = require('fs');
const path = require('path');
const db = require('../models/index');
const crypto = require('crypto');

class DataService {
    static async populateFromJson(filename) {
        const filepath = path.join(__dirname, `../public/json/${filename}`);
        let data = [];
        
        try {
            const rawData = fs.readFileSync(filepath);
            data = JSON.parse(rawData);
            console.log(`Success reading ${filename}`);
        } catch(err) {  
            console.error(`Error reading ${filename}:`, err);
            return;
        }

        if (filename === 'users.json') {
            await this.insertUsers(data);
        } else {
            await this.executeRawQueries(data);
        }
    }

    static hashPassword(password) {
        return new Promise((resolve, reject) => {
            const salt = crypto.randomBytes(16).toString('hex');
            crypto.pbkdf2(password, salt, 310000, 32, 'sha256', (err, hashedPassword) => {
                if (err) reject(err);
                resolve(salt + '$' + hashedPassword.toString('hex'));
            });
        });
    }

    static async insertUsers(users) {
        for (const user of users) {
            const hashedPassword = await this.hashPassword(user.Password);
            await db.User.create({
                FullName: user.FullName,
                UserName: user.UserName,
                Password: hashedPassword,
                Role: user.Role
            }).catch(err => {
                console.error("Error inserting user:", err);
            });
        }
    }

    static async executeRawQueries(data) {
        for (const entry of data) {
            await db.sequelize.query(entry.query).catch(err => {
                console.error(`Error executing query from JSON, ID: ${entry.id}`, err);
            });
        }
    }
}

module.exports = DataService;

