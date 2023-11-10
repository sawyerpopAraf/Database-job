module.exports = (sequelize, Sequelize) => {
    const Temperament = sequelize.define('Temperament', {
        Temperament: Sequelize.DataTypes.STRING,
    },{
        timestamps: false
    });
    Temperament.associate = function(models) {
        Temperament.belongsToMany(models.Animal,{through: models.AnimalTemperament});
    };
	return Temperament
}