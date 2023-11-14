class AdoptionService {
    constructor(db) {
        this.sequelize = db.sequelize; // 
        this.Animal = db.Animal;
        this.User = db.User;
        this.Adoption = db.Adoption;
    }

    async getAdoptionDetails() {
        // raw query
        const query = `
           SELECT Users.UserName, Animals.Name
           FROM Adoptions 
           LEFT JOIN Users ON Adoptions.UserId = Users.id
           LEFT JOIN Animals ON Adoptions.AnimalId = Animals.id;
        `;

        const [results, metadata] = await this.sequelize.query(query);

        return results;
    }
}

module.exports = AdoptionService;