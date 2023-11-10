class SpeciesService {
    constructor(db) {
        this.client = db.sequelize;
        this.Animal = db.Animal;
        this.Species = db.Species;
     }

    async getAll() {
        return this.Species.findAll({
            where:{}
        })
    };
    
    async updateSpecies(id, newSpecies) {
        return this.Species.update(
            { Name: newSpecies },
            { where: { id: id } }
        );
    }
    
    async addSpecies(species) {
        return this.Species.create({
            Name: species
        });
    }
    async deleteSpecies(id) {
        let animalsWithThisSpecies = await this.Animal.findAll({ where: { SpeciesId: id } });
    
        if (animalsWithThisSpecies.length > 0) {
            throw new Error("Species in use");
        }
        return this.Species.destroy({ where: { id: id } });
    }
    
}    

module.exports = SpeciesService;