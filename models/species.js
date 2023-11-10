module.exports = (sequelize, Sequelize) => {
    const Species = sequelize.define('Species', {
        Name: Sequelize.DataTypes.STRING,
    },{
        timestamps: false
    });
    Species.associate = function(models) {
        Species.hasMany(models.Animal)
    };
	return Species
}