module.exports = (sequelize, Sequelize) => {
    const Adoption= sequelize.define('Adoption', {
        UserId: Sequelize.DataTypes.INTEGER,
        AnimalId: Sequelize.DataTypes.INTEGER,
    },{
        timestamps: false
    });
    Adoption.associate = function(models) {
        Adoption.belongsTo(models.User);
        Adoption.belongsTo(models.Animal);
    };
    
   
	return Adoption
}
