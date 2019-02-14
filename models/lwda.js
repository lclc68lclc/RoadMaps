module.exports = function(sequelize, DataTypes) {
    var lwda = sequelize.define('lwda', {
        OccupationClassification: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        OccupationTitle: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        EducationNeeded: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        ExperienceNeeded: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        OnTheJobTraining: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        Employment: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        AverageWage: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        AvgAnnualWage: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        EntryWage: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        MedianWage: {
            type: DataTypes.DOUBLE,
            allowNull: true
        }
    });
    return lwda;
};