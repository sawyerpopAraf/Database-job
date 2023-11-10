class TemperamentService {
    constructor(db) {
        this.client = db.sequelize;
        this.Animal = db.Animal;
        this.Temperament = db.Temperament;
        this.AnimalTemperament = db.AnimalTemperament;
     }

    async getAll() {
        return this.Temperament.findAll({
            where:{}
        })
    };
    
    async updateTemp(id, temp) {
        return this.Temperament.update(
            { Temperament: temp },
            { where: { id: id } }
        );
    }
    
    
    async addTemp(Temperament) {
        return this.Temperament.create({
            Temperament: Temperament
        });
    }
   
    async deleteTemperament(id) {
        let animalsWithThisTemp= await this.AnimalTemperament.findAll({ where: { TemperamentId: id } });
    
        if (animalsWithThisTemp.length> 0) {
            throw new Error("Temperament in use");
        }
        return this.Temperament.destroy({ where: { id: id } });
    }
    
}    

module.exports = TemperamentService;