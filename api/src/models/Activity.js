const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        dificulty: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5")
        },
        duration: {
            type: DataTypes.FLOAT
        },
        season: {
            type: DataTypes.ENUM("Verano", "Otoño", "Inverno", "Primavera")
        }
    });
}