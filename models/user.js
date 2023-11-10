module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        FullName: Sequelize.DataTypes.STRING,
        UserName: Sequelize.DataTypes.STRING,
        Password: Sequelize.DataTypes.STRING,
        Role: Sequelize.DataTypes.STRING,
    },{
        timestamps: false
    });
    User.associate = function(models) {
        User.hasMany(models.Adoption);
    };
	return User
}