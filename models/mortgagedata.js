module.exports = function(sequelize, DataTypes) {
    var mortgagedata = sequelize.define('mortgagedata', {
        neighborhood: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        housesize: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        houseprice: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        mortpayment: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        annualsal: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
            tableName: 'mortgagedata',
            
            timestampe: false
    });
    return mortgagedata;
};