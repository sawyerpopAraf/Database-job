class AnimalService {
    constructor(db) {
        this.client = db.sequelize;
        this.Animal = db.Animal;
        this.Adoption = db.Adoption;
        this.User = db.User
        this.Temperament = db.Temperament;
        this.AnimalTemperament = db.AnimalTemperament
        this.Species = db.Species;
        
    }

    async getAll() {
        return this.Animal.findAll({
            include: [
                {
                    model: this.Temperament,
                    through: this.AnimalTemperament,
                    as: 'Temperaments' 
                },
                {
                    model: this.Adoption
                },
                {
                    model: this.Species
                }
            ]
        });
    }
    
    async updateAdoptionStatus(animalId, status) {
        return this.Animal.update(
            { Adopted: status },
            { where: { id: animalId } }
        );
    }
    
    async adoptAnimal(animalId, userId) {
        await this.Adoption.create({
            UserId: userId,
            AnimalId: animalId
        });
        return this.updateAdoptionStatus(animalId, true);
    }

    async dropAdoption(animalId) {
        await this.Adoption.destroy({
            where: { AnimalId: animalId }
        });
        return this.updateAdoptionStatus(animalId, false);
    }

    async animalsByAge(){
        const query=`
        SELECT Animals.Name, Animals.Birthday 
        FROM Animals 
        ORDER BY Animals.Birthday
        `

        const [results, metadata] = await this.client.query(query);

        console.log(results);

        return results;
    }

    async animalsByDateRange(dateFrom, dateTo) {
        const query = `
        SELECT Animals.Name, Animals.Birthday 
        FROM Animals 
        WHERE Birthday BETWEEN :dateFrom AND :dateTo
        `;
    
        const [results, metadata] = await this.client.query(query, {
            replacements: { dateFrom: dateFrom, dateTo: dateTo }
        });
    
        return results;
    }

    async animalsBySize(size) {
        const query = `
        SELECT COUNT(*) AS Number
        FROM Animals 
        WHERE Size = :size;
        `;
    
        const [results, metadata] = await this.client.query(query, {
            replacements: { size: size }
        });
    
        return results;
    }
    
    
}
module.exports = AnimalService;