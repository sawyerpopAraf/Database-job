module.exports = (sequelize, Sequelize) => {
    const AnimalTemperament = sequelize.define('AnimalTemperament', {
    }, {
        timestamps: false
    });
    return AnimalTemperament;
    
}