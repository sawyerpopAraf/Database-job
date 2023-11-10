module.exports = (sequelize, Sequelize) => {
    const Animal = sequelize.define('Animal', {
        Name: Sequelize.DataTypes.STRING,
        SpeciesId: Sequelize.DataTypes.INTEGER,
        Birthday: Sequelize.DataTypes.DATE,
        Size: Sequelize.DataTypes.STRING,
        Adopted: Sequelize.DataTypes.BOOLEAN
    },{
        timestamps: false
    });
    Animal.associate = function(models) {
        Animal.belongsToMany(models.Temperament,{through: models.AnimalTemperament});
        Animal.hasOne(models.Adoption);
        Animal.belongsTo(models.Species);        
    };
    
	return Animal
}